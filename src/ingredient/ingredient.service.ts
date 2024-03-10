import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Ingredient, Prisma } from "@prisma/client";

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) {}

  // Get all ingredients
  async getAllIngredients(): Promise<Ingredient[]> {
    return this.prisma.ingredient.findMany();
  }

  async getSingleIngredient(data: {
    where: Prisma.IngredientWhereUniqueInput;
  }): Promise<Ingredient | null> {
    const { where } = data;

    return this.prisma.ingredient.findUnique({ where });
  }

  async createIngredient(data: Prisma.IngredientCreateManyInput) {
    return this.prisma.ingredient.create({ data });
  }

  async updateIngredient(
    where: Prisma.IngredientWhereUniqueInput,
    data: Prisma.IngredientUpdateInput,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.ingredient.updateMany({
      where,
      data,
    });
  }

  async deleteIngredient(
    where: Prisma.IngredientWhereUniqueInput,
  ): Promise<Ingredient> {
    return this.prisma.ingredient.delete({ where });
  }
}
