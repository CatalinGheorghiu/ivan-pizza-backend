import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { PizzaModule } from "./pizza/pizza.module";
import { IngredientModule } from "./ingredient/ingredient.module";

@Module({
  imports: [ConfigModule.forRoot(), PizzaModule, IngredientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
