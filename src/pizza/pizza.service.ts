import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Pizza, Prisma } from "@prisma/client";

@Injectable()
export class PizzaService {
  constructor(private prisma: PrismaService) {}

  async getAllPizzas(): Promise<Pizza[]> {
    const pizzas = await this.prisma.pizza.findMany({
      include: {
        ingredients: true,
      },
    });

    if (pizzas.length < 1) {
      throw new NotFoundException("There aren't any pizza at the moment");
    }
    return pizzas;
  }

  async getSinglePizza(where: Prisma.PizzaWhereUniqueInput): Promise<Pizza> {
    const pizza = await this.prisma.pizza.findUnique({
      where,
      include: { ingredients: true },
    });

    if (!pizza) {
      throw new NotFoundException("The requested pizza does not exist!");
    }

    return pizza;
  }

  async getPizzaByIngredient(ingredientId: string): Promise<Pizza[]> {
    const pizzasByIngredient = await this.prisma.pizza.findMany({
      where: {
        ingredients: {
          some: {
            id: ingredientId,
          },
        },
      },
    });

    if (pizzasByIngredient.length < 1) {
      throw new NotFoundException(
        "There aren't any pizza matching the requested ingredient",
      );
    }

    return pizzasByIngredient;
  }

  async createPizza(data: Prisma.PizzaCreateManyInput): Promise<Pizza> {
    const { ingredientsIds } = data;

    // Ensure the ingredientsIds is an array and check that there is at least 1 item
    if (!(ingredientsIds instanceof Array) || ingredientsIds.length < 1) {
      throw new HttpException(
        "A pizza can not be created without ingredients, be creative!",
        HttpStatus.BAD_REQUEST,
      );
    }

    // Check for valid ingredient IDs
    const validIngredients = await this.prisma.ingredient.findMany({
      where: {
        id: {
          in: ingredientsIds,
        },
      },
      select: { id: true },
    });

    if (validIngredients.length < 1) {
      throw new NotFoundException(
        "One or more provided ingredients are not valid!",
      );
    }

    const createdPizza = await this.prisma.pizza.create({
      data: {
        ...data,
        ingredients: {
          connect: ingredientsIds.map((id) => ({ id })),
        },
      },
    });

    // Update ingredients to reference the created pizza
    await Promise.all(
      ingredientsIds.map(async (ingredientId) => {
        await this.prisma.ingredient.update({
          where: { id: ingredientId },
          data: {
            pizzas: {
              connect: { id: createdPizza.id },
            },
          },
        });
      }),
    );

    return createdPizza;
  }

  async updatePizza(
    where: Prisma.PizzaWhereUniqueInput,
    data: Prisma.PizzaUncheckedUpdateInput,
  ): Promise<Pizza> {
    // Get the pizza with the requested ID
    const pizza = await this.prisma.pizza.findUnique({ where });
    // Provided ingredients ID
    const { ingredientsIds: dataIngredientsIds } = data;
    if (!pizza) {
      throw new NotFoundException(
        "The pizza with the requested ID doesn't exist!",
      );
    }

    if (
      !(dataIngredientsIds instanceof Array) ||
      dataIngredientsIds.length < 1
    ) {
      throw new NotFoundException("A pizza must have at least 1 ingredient!");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...pizzaWithoutId } = pizza;
    const removedIngredientIds = pizza.ingredientsIds.filter(
      (id) => !dataIngredientsIds.includes(id),
    );

    const ingredientsToUpdate = await Promise.all(
      removedIngredientIds.map(async (ingredientId) => {
        return this.prisma.ingredient.findUnique({
          where: { id: ingredientId },
        });
      }),
    );

    // Validate that all ingredients exist
    await Promise.all(
      dataIngredientsIds.map(async (ingredientId) => {
        const ingredient = await this.prisma.ingredient.findUnique({
          where: {
            id: ingredientId,
          },
        });

        if (!ingredient) {
          throw new NotFoundException(
            "One of the provided ingredients is not valid!",
          );
        }

        return ingredient;
      }),
    );

    // Updated the pizza if the provided ingredients are valid
    const updatedPizza = await this.prisma.pizza.update({
      where,
      data: {
        ...pizzaWithoutId,
        ...data,
      },
    });

    // Update the ingredients ID list to reference the updated pizza
    await Promise.all(
      dataIngredientsIds.map(async (ingredientId) => {
        const ingredient = await this.prisma.ingredient.update({
          where: { id: ingredientId },
          data: {
            pizzas: {
              connect: {
                id: updatedPizza.id,
              },
            },
          },
        });

        if (!ingredient) {
          throw new BadRequestException(
            "There has been an error while trying to update the pizza ingredient!",
          );
        }
        return ingredient;
      }),
    );

    // Disconnect removed ingredients
    await Promise.all(
      ingredientsToUpdate.map(async (ingredient) => {
        if (!ingredient) {
          throw new BadRequestException(
            "There has been an error while trying to update the pizza ingredient!",
          );
        }

        const updatedIngredientData = {
          pizzas: { disconnect: { id: updatedPizza.id } },
        };

        await this.prisma.ingredient.update({
          where: { id: ingredient.id },
          data: updatedIngredientData,
        });
      }),
    );

    return updatedPizza;
  }

  async deletePizza(where: Prisma.PizzaWhereUniqueInput): Promise<Pizza> {
    return this.prisma.$transaction(async (tx) => {
      const pizzaToDelete = await tx.pizza.findUnique({ where });

      if (!pizzaToDelete) {
        throw new NotFoundException("The requested pizza was not found!");
      }

      // Fetch ingredients to update
      const ingredientsToUpdate = await tx.ingredient.findMany({
        where: { id: { in: pizzaToDelete.ingredientsIds } },
      });

      // Delete the pizza
      await tx.pizza.delete({ where });

      // Update ingredients one by one (excluding the deleted pizza's ID)
      for (const ingredient of ingredientsToUpdate) {
        const updatedPizzasIds = ingredient.pizzasIds.filter(
          (id) => id !== pizzaToDelete.id,
        );
        await tx.ingredient.update({
          where: { id: ingredient.id },
          data: { pizzasIds: { set: updatedPizzasIds } },
        });
      }

      return pizzaToDelete;
    });
  }
}
