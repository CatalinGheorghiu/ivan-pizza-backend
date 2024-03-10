import { Module } from "@nestjs/common";
import { PizzaService } from "./pizza.service";
import { PizzaController } from "./pizza.controller";
import { PrismaService } from "../prisma.service";

@Module({
  providers: [PizzaService, PrismaService],
  controllers: [PizzaController],
})
export class PizzaModule {}
