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
import { CreateIngredientDto } from "./dto/create-ingredient.dto/create-ingredient.dto";
import { UpdateIngredientDto } from "./dto/update-ingredient.dto/update-ingredient.dto";

@Controller("ingredient")
export class IngredientController {
  constructor(private readonly ingredient: IngredientService) {}

  @Get()
  async getAllIngredients(): Promise<Ingredient[]> {
    return this.ingredient.getAllIngredients();
  }

  @Get(":id")
  async getSingleIngredient(@Param("id") id: string): Promise<Ingredient> {
    return this.ingredient.getSingleIngredient({ id });
  }

  @Post()
  async createIngredient(
    @Body() createIngredientDto: CreateIngredientDto,
  ): Promise<Ingredient> {
    return this.ingredient.createIngredient(createIngredientDto);
  }

  @Patch(":id")
  async updateIngredient(
    @Param("id") id: string,
    @Body() updateIngredientDto: UpdateIngredientDto,
  ): Promise<Ingredient> {
    return this.ingredient.updateIngredient({ id }, updateIngredientDto);
  }

  @Delete(":id")
  async deletePizza(@Param("id") id: string): Promise<Ingredient> {
    return this.ingredient.deleteIngredient({ id });
  }
}
