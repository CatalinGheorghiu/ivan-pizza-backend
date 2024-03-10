import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { IngredientService } from "./ingredient.service";
import { Ingredient } from "@prisma/client";

@Controller("ingredient")
export class IngredientController {
  constructor(private readonly ingredient: IngredientService) {}

  @Get()
  async getAllIngredients(): Promise<Ingredient[]> {
    return this.ingredient.getAllIngredients();
  }

  @Get(":id")
  async getSingleIngredient(
    @Param("id") id: string,
  ): Promise<Ingredient | null> {
    return this.ingredient.getSingleIngredient({ where: { id } });
  }

  @Post()
  async createIngredient(@Body() data: Ingredient) {
    const { name, pizzasIds } = data;

    return this.ingredient.createIngredient({
      name,
      pizzasIds,
    });
  }

  @Patch(":id")
  async updateIngredient(@Param("id") id: string, @Body() data: Ingredient) {
    return this.ingredient.updateIngredient({ id }, data);
  }

  @Delete(":id")
  async deletePizza(@Param("id") id: string) {
    return this.ingredient.deleteIngredient({ id });
  }
}
