import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Pizza, Prisma } from "@prisma/client";

@Injectable()
export class PizzaService {
  constructor(private prisma: PrismaService) {}

  async getAllPizzas(): Promise<Pizza[]> {
    return this.prisma.pizza.findMany();
  }
  async getSinglePizza(
    where: Prisma.PizzaWhereUniqueInput,
  ): Promise<Pizza | null> {
    return this.prisma.pizza.findUnique({ where });
  }

  async getPizzaByIngredient(ingredientId: string) {
    return this.prisma.pizza.findMany({
      where: {
        ingredients: {
          some: {
            id: ingredientId,
          },
        },
      },
    });
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

    try {
      // Check for valid ingredient IDs
      await this.prisma.ingredient.findMany({
        where: {
          id: {
            in: ingredientsIds,
          },
        },
        select: { id: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          "One or more provided ingredient IDs are invalid!",
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw error;
      }
    }

    return this.prisma.pizza.create({ data });
  }
  async updatePizza(
    where: Prisma.PizzaWhereUniqueInput,
    data: Prisma.PizzaUpdateInput,
  ) {
    return this.prisma.pizza.update({ where, data });
  }
  async deletePizza(where: Prisma.PizzaWhereUniqueInput) {
    return this.prisma.pizza.delete({ where });
  }
}
