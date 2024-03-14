import { PartialType } from "@nestjs/mapped-types";
import { CreateIngredientDto } from "../create-ingredient.dto/create-ingredient.dto";

export class UpdateIngredientDto extends PartialType(CreateIngredientDto) {}
