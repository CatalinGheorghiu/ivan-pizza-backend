import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import {
  emptyFieldMessage,
  fieldTypeMessage,
  maxLengthMessage,
  minLengthMessage,
} from "../../../common/utils";

export class CreateIngredientDto {
  // Name field
  @IsString({
    message: fieldTypeMessage("Name", "string"),
  })
  @MinLength(3, {
    message: minLengthMessage("Name", 3),
  })
  @MaxLength(20, {
    message: maxLengthMessage("Name", 20),
  })
  readonly name: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true, message: emptyFieldMessage("PizzasIds") })
  readonly pizzasIds: string[];
}
