import { PrismaClient } from "@prisma/client";
import { allIngredients, allPizzas, generateRandomIngredients } from "./pizzas";

const prisma = new PrismaClient();

async function main() {
  // Create the ingredients from static data
  await Promise.all(
    allIngredients.map(async (ingredient) => {
      await prisma.ingredient.create({
        data: {
          name: ingredient.name,
          pizzasIds: [],
        },
      });
    }),
  );

  // Get all the ingredients from DB
  const ingredients = await prisma.ingredient.findMany();

  await Promise.all(
    allPizzas.map(async (pizza) => {
      const { name, origin, description, image, canBeDeleted } = pizza;
      const numberOfIngredients = Math.floor(Math.random() * 10 + 1);

      // Generate 5 random ingredients
      const randomIngredients = generateRandomIngredients(
        ingredients,
        numberOfIngredients,
      ).map((ingredient) => ingredient);

      // Create pizza from static data and DB ingredients
      await prisma.pizza.create({
        data: {
          name,
          origin,
          description,
          image,
          canBeDeleted,
          ingredientsIds: randomIngredients,
        },
      });
    }),
  );

  const pizzas = await prisma.pizza.findMany();

  // Iterate over ingredientsIds of current pizza
  await Promise.all(
    pizzas.map((pizza) => {
      const { id: pizzaId, ingredientsIds } = pizza;

      ingredientsIds.map(async (ingredientId) => {
        // Find the corresponding ingredient in the ingredients array
        const ingredient = ingredients.find(
          (ingredient) => ingredient.id === ingredientId,
        );
        if (ingredient) {
          let retries = 5;
          while (retries > 0) {
            try {
              // Add pizzaId to pizzasIds of the corresponding ingredient
              await prisma.ingredient.updateMany({
                where: { id: ingredient.id },
                data: {
                  pizzasIds: {
                    push: pizzaId,
                  },
                },
              });
              break; // if update is successful, break the loop
            } catch (error) {
              if (error.code === "P2034") {
                retries -= 1; // decrement the retry count
                console.log(`Retrying... attempts left: ${retries}`);
              } else {
                throw error; // if error is not a write conflict, throw it
              }
            }
          }
        }
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
