import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { PizzaService } from "./pizza.service";
import { Pizza } from "@prisma/client";

@Controller("pizza")
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  async getAllPizzas() {
    return this.pizzaService.getAllPizzas();
  }

  @Get(":id")
  async getSinglePizza(@Param("id") id: string) {
    return this.pizzaService.getSinglePizza({ id });
  }

  @Get("ingredient/:id")
  async getPizzasByIngredientId(@Param("id") ingredientId: string) {
    return this.pizzaService.getPizzaByIngredient(ingredientId);
  }

  @Post()
  async createPizza(
    @Body()
    { canBeDeleted, description, name, origin, image, ingredientsIds }: Pizza,
  ) {
    return this.pizzaService.createPizza({
      canBeDeleted,
      description,
      name,
      origin,
      image,
      ingredientsIds,
    });
  }

  @Patch(":id")
  async updatePizza(@Param("id") id: string, @Body() data: Pizza) {
    return this.pizzaService.updatePizza({ id }, data);
  }

  @Delete(":id")
  async deletePizza(@Param("id") id: string) {
    return this.pizzaService.deletePizza({ id });
  }
}
