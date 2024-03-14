import {
  ArrayMinSize,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
import {
  emptyFieldMessage,
  fieldTypeMessage,
  maxLengthMessage,
  minLengthMessage,
} from "../../../common/utils";

export class CreatePizzaDto {
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

  // Origin field
  @IsString({
    message: fieldTypeMessage("Origin", "string"),
  })
  @MinLength(3, {
    message: minLengthMessage("Origin", 3),
  })
  @MaxLength(20, {
    message: maxLengthMessage("Origin", 20),
  })
  readonly origin: string;

  // Ingredients field
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ArrayMinSize(1, {
    message: "Pizza must have at least 1 ingredient",
  })
  readonly ingredientsIds: string[];

  // Image field
  @IsString({
    message: fieldTypeMessage("Image", "string"),
  })
  @IsNotEmpty({ message: emptyFieldMessage("Image") })
  readonly image: string;

  // Description field
  @IsString({
    message: fieldTypeMessage("Description", "string"),
  })
  @MinLength(10, {
    message: minLengthMessage("Description", 10),
  })
  @MaxLength(200, {
    message: maxLengthMessage("Description", 100),
  })
  readonly description: string;

  // canBeDeleted field
  @IsBoolean()
  @IsOptional()
  readonly canBeDeleted?: boolean = false;
}
