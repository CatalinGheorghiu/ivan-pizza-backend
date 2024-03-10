import { Module } from "@nestjs/common";
import { IngredientService } from "./ingredient.service";
import { IngredientController } from "./ingredient.controller";
import { PrismaService } from "../prisma.service";

@Module({
  providers: [PrismaService, IngredientService],
  controllers: [IngredientController],
})
export class IngredientModule {}
