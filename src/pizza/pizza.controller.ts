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
import { PizzaService } from "./pizza.service";
import { CreatePizzaDto } from "./dto/create-pizza.dto/create-pizza.dto";
import { UpdatePizzaDto } from "./dto/update-pizza.dto/update-pizza.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto/pagination-query.dto";

@Controller("pizza")
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  async getAllPizzas(@Query() paginationQuery: PaginationQueryDto) {
    return this.pizzaService.getAllPizzas(paginationQuery);
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
    createPizzaDto: CreatePizzaDto,
  ) {
    return this.pizzaService.createPizza(createPizzaDto);
  }

  @Patch(":id")
  async updatePizza(
    @Param("id") id: string,
    @Body() updatePizzaDto: UpdatePizzaDto,
  ) {
    return this.pizzaService.updatePizza({ id }, updatePizzaDto);
  }

  @Delete(":id")
  async deletePizza(@Param("id") id: string) {
    return this.pizzaService.deletePizza({ id });
  }
}
