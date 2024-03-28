import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { IngredientService } from "./ingredient.service";
import { Ingredient } from "@prisma/client";
import { CreateIngredientDto } from "./dto/create-ingredient.dto/create-ingredient.dto";
import { UpdateIngredientDto } from "./dto/update-ingredient.dto/update-ingredient.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto/pagination-query.dto";

@Controller("ingredient")
export class IngredientController {
  constructor(private readonly ingredient: IngredientService) {}

  @Get()
  async getAllIngredients(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<Ingredient[]> {
    return this.ingredient.getAllIngredients(paginationQuery);
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
