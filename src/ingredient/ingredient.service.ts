import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Ingredient, Prisma } from "@prisma/client";

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) {}

  // Get all ingredients
  async getAllIngredients(): Promise<Ingredient[]> {
    const ingredients = await this.prisma.ingredient.findMany();

    if (ingredients.length < 1) {
      throw new NotFoundException("There aren't any ingredients at the moment");
    }

    return ingredients;
  }

  async getSingleIngredient(
    where: Prisma.IngredientWhereUniqueInput,
  ): Promise<Ingredient> {
    const ingredient = await this.prisma.ingredient.findUnique({ where });

    if (!ingredient) {
      throw new NotFoundException("The requested ingredient does not exist!");
    }

    return ingredient;
  }

  async createIngredient(
    data: Prisma.IngredientCreateManyInput,
  ): Promise<Ingredient> {
    const { pizzasIds } = data;

    // If there were pizza's provided, but it's not an array
    if (pizzasIds && !(pizzasIds instanceof Array)) {
      throw new HttpException(
        "The object { pizzaIds } must be an array of strings!",
        HttpStatus.BAD_REQUEST,
      );
    }

    // Check for valid pizza IDs
    const validPizzas = await this.prisma.pizza.findMany({
      where: {
        id: {
          in: pizzasIds,
        },
      },
    });

    // If there were pizza's provided and they are invalid
    if (pizzasIds && pizzasIds.length > 1 && validPizzas.length < 1) {
      throw new NotFoundException(
        "One or more provided pizza's are not valid!",
      );
    }

    const createdIngredient = await this.prisma.ingredient.create({
      data: {
        ...data,
        pizzas: {
          connect: pizzasIds ? pizzasIds.map((id) => ({ id })) : [],
        },
      },
    });

    if (pizzasIds) {
      // Update pizzas to reference created ingredient
      await Promise.all(
        pizzasIds.map(async (pizzaId) => {
          await this.prisma.pizza.update({
            where: { id: pizzaId },
            data: {
              ingredients: {
                connect: { id: createdIngredient.id },
              },
            },
          });
        }),
      );
    }

    return createdIngredient;
  }

  async updateIngredient(
    where: Prisma.IngredientWhereUniqueInput,
    data: Prisma.IngredientUncheckedUpdateInput,
  ): Promise<Ingredient> {
    // Get the ingredient with the requested ID
    const ingredient = await this.prisma.ingredient.findUnique({ where });
    // Provided pizzas ID
    const { pizzasIds: dataPizzasIds } = data;

    if (!ingredient) {
      throw new NotFoundException(
        "The ingredient with the requested ID doesn't exist!",
      );
    }

    if (!(dataPizzasIds instanceof Array) || dataPizzasIds.length < 1) {
      throw new NotFoundException("A pizza must have at least 1 ingredient!");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...ingredientWithoutId } = ingredient;
    const removedPizzasIds = ingredient.pizzasIds.filter(
      (id) => !dataPizzasIds.includes(id),
    );

    const pizzasToUpdate = await Promise.all(
      removedPizzasIds.map(async (pizzaId) => {
        return this.prisma.ingredient.findUnique({
          where: { id: pizzaId },
        });
      }),
    );

    // Validate that all pizzas exist
    await Promise.all(
      dataPizzasIds.map(async (pizzaId) => {
        const pizza = await this.prisma.pizza.findUnique({
          where: {
            id: pizzaId,
          },
        });

        if (!pizza) {
          throw new NotFoundException(
            "One of the provided pizzas is not valid!",
          );
        }

        return pizza;
      }),
    );

    // Updated the ingredient if the provided pizzas are valid
    const updatedIngredient = await this.prisma.ingredient.update({
      where,
      data: {
        ...ingredientWithoutId,
        ...data,
      },
    });

    // Update the pizzas ID list to reference the updated ingredient
    await Promise.all(
      dataPizzasIds.map(async (pizzaId) => {
        const pizza = await this.prisma.pizza.update({
          where: { id: pizzaId },
          data: {
            ingredients: {
              connect: {
                id: updatedIngredient.id,
              },
            },
          },
        });

        if (!pizza) {
          throw new BadRequestException(
            "There has been an error while trying to update the ingredient's corresponding pizza!",
          );
        }
        return pizza;
      }),
    );

    // Disconnect removed pizzas
    await Promise.all(
      pizzasToUpdate.map(async (pizza) => {
        if (!pizza) {
          throw new BadRequestException(
            "There has been an error while trying to update the ingredient's corresponding pizza!",
          );
        }

        const updatedPizzaData = {
          ingredients: { disconnect: { id: updatedIngredient.id } },
        };

        await this.prisma.pizza.update({
          where: { id: pizza.id },
          data: updatedPizzaData,
        });
      }),
    );

    return updatedIngredient;
  }

  async deleteIngredient(
    where: Prisma.IngredientWhereUniqueInput,
  ): Promise<Ingredient> {
    return this.prisma.$transaction(async (tx) => {
      const ingredientToDelete = await tx.ingredient.findUnique({ where });

      if (!ingredientToDelete) {
        throw new NotFoundException("The requested ingredient was not found!");
      }

      // Fetch pizzas to update
      const pizzasToUpdate = await tx.pizza.findMany({
        where: { id: { in: ingredientToDelete.pizzasIds } },
      });

      // Delete the ingredient
      await tx.ingredient.delete({ where });

      // Update pizzas one by one (excluding the deleted ingredient ID)
      for (const pizza of pizzasToUpdate) {
        const updatedIngredientsIds = pizza.ingredientsIds.filter(
          (id) => id !== ingredientToDelete.id,
        );
        await tx.pizza.update({
          where: { id: pizza.id },
          data: { ingredientsIds: { set: updatedIngredientsIds } },
        });
      }

      return ingredientToDelete;
    });
  }
}
