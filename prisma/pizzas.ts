import { Ingredient, Pizza } from "@prisma/client";

export function generateRandomIngredients(
  array: Ingredient[],
  limit = 5,
): string[] {
  const uniqueIngredients: Set<string> = new Set();
  for (let i = 0; i < limit; i++) {
    // Generate random index
    const randomIngredient = array[Math.floor(Math.random() * array.length)];

    if (randomIngredient) {
      uniqueIngredients.add(randomIngredient.id);
    }
  }

  return Array.from(uniqueIngredients);
}

export const allIngredients: Ingredient[] = [
  { id: "", pizzasIds: [], name: "tomato sauce" },
  { id: "", pizzasIds: [], name: "mozzarella cheese" },
  { id: "", pizzasIds: [], name: "provolone cheese" },
  { id: "", pizzasIds: [], name: "ricotta cheese" },
  { id: "", pizzasIds: [], name: "feta cheese" },
  { id: "", pizzasIds: [], name: "gorgonzola cheese" },
  { id: "", pizzasIds: [], name: "parmesan cheese" },
  { id: "", pizzasIds: [], name: "pecorino romano cheese" },
  { id: "", pizzasIds: [], name: "ham" },
  { id: "", pizzasIds: [], name: "onions" },
  { id: "", pizzasIds: [], name: "red onion" },
  { id: "", pizzasIds: [], name: "peppers" },
  { id: "", pizzasIds: [], name: "green peppers" },
  { id: "", pizzasIds: [], name: "yellow peppers" },
  { id: "", pizzasIds: [], name: "sausage" },
  { id: "", pizzasIds: [], name: "italian sausage" },
  { id: "", pizzasIds: [], name: "chorizo" },
  { id: "", pizzasIds: [], name: "pepperoni" },
  { id: "", pizzasIds: [], name: "spicy pepperoni" },
  { id: "", pizzasIds: [], name: "cup pepperoni" },
  { id: "", pizzasIds: [], name: "mushrooms" },
  { id: "", pizzasIds: [], name: "portobello mushrooms" },
  { id: "", pizzasIds: [], name: "cremini mushrooms" },
  { id: "", pizzasIds: [], name: "shiitake mushrooms" },
  { id: "", pizzasIds: [], name: "oyster mushrooms" },
  { id: "", pizzasIds: [], name: "bacon" },
  { id: "", pizzasIds: [], name: "applewood smoked bacon" },
  { id: "", pizzasIds: [], name: "peppered bacon" },
  { id: "", pizzasIds: [], name: "canadian bacon" },
  { id: "", pizzasIds: [], name: "pineapple" },
  { id: "", pizzasIds: [], name: "fresh pineapple" },
  { id: "", pizzasIds: [], name: "grilled pineapple" },
  { id: "", pizzasIds: [], name: "ground beef" },
  { id: "", pizzasIds: [], name: "italian sausage crumbles" },
  { id: "", pizzasIds: [], name: "chicken" },
  { id: "", pizzasIds: [], name: "grilled chicken" },
  { id: "", pizzasIds: [], name: "shredded chicken" },
  { id: "", pizzasIds: [], name: "shrimp" },
  { id: "", pizzasIds: [], name: "kalamata olives" },
  { id: "", pizzasIds: [], name: "black olives" },
  { id: "", pizzasIds: [], name: "jalapenos" },
  { id: "", pizzasIds: [], name: "spinach" },
  { id: "", pizzasIds: [], name: "arugula" },
  { id: "", pizzasIds: [], name: "roasted red peppers" },
  { id: "", pizzasIds: [], name: "artichoke hearts" },
  { id: "", pizzasIds: [], name: "fresh basil" },
  { id: "", pizzasIds: [], name: "dried oregano" },
  { id: "", pizzasIds: [], name: "red pepper flakes" },
  { id: "", pizzasIds: [], name: "garlic cloves" },
  { id: "", pizzasIds: [], name: "alfredo sauce" },
  { id: "", pizzasIds: [], name: "pesto sauce" },
  { id: "", pizzasIds: [], name: "bbq sauce" },
  { id: "", pizzasIds: [], name: "goat cheese" },
  { id: "", pizzasIds: [], name: "caramelized onions" },
  { id: "", pizzasIds: [], name: "corn" },
  { id: "", pizzasIds: [], name: "anchovies" },
  { id: "", pizzasIds: [], name: "sun-dried tomatoes" },
  { id: "", pizzasIds: [], name: "roasted eggplant" },
];

export const allPizzas: Pizza[] = [
  {
    id: "",
    name: "Pizza Ortolana",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/7a8d8d9d934843f0ad09ef15fd7d5bea.jpg?w=905&h=510",
    description:
      "The name of this classic Italian pizza translates to greengrocer’s pizza. It consists of a basic pizza dough which is smeared with tomato sauce, topped with mozzarella and grilled slices of eggplant and zucchini, then baked. Lastly, pizza ortolana is typically drizzled with olive oil and topped with fresh basil.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Cake",
    origin: "Canada, North America",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/b7c0895adcf248ff806a9064995c1cac.jpg?w=905&h=510",
    description:
      "The infamous pizza cake came to life in April of 2014 when a Canadian-based chain Boston Pizza started a campaign called Pizza Game Changers, where the public was called in to vote on the next big thing when it comes to pizza-related products.\n\nPizza cake won the race by miles and since its appearance had people either salivating or shaking their heads in denial. The cake in question is actually made up of multiple layers of pizza that are baked in a pot or a cake pan with tall sides. The recipes vary in the number of pizza layers, ranging from three to six, but the stuffing is always the same; tomato sauce, pepperoni, and heaps of cheese.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Apizza",
    origin: "New Haven, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/feaf29ba346349c29a1419e88b21bd56.jpg?w=905&h=510",
    description:
      'Apizza (pronounced "ah-beets") is a popular type of pizza in New Haven, Connecticut characterized by its prolonged baking time in extremely hot coal ovens and the high moisture content of the dough. Due to these two defining characteristics, the result is a pizza with a thin, black, crispy, and charred crust that might appear to be burnt, but instead has a deliciously chewy texture and flavor.\n\nUsual toppings are sparse, including grated cheese and tomatoes or anchovies so that the pizza won\'t be over-sauced or over-topped, and as they are formed by hand, there is no uniform shape of these pizzas. It was invented by Frank Pepe, an Italian baker who sold two versions of Neapolitan style pizza, topped with grated cheese, garlic, oregano, olive oil, and anchovies or tomatoes. ',
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Rustica",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/1b95e40f25f445aeb1d42db22d98d240.jpg?w=905&h=510",
    description:
      "Pizza rustica or pizzagaina is a large Italian pizza pie consisting of a pastry-like crust that goes both on top and on the bottom, and in between the crust it holds ingredients such as salami, ham, prosciutto, eggs, and Italian cheeses such as mozzarella, ricotta, Pecorino Romano, and Parmigiano Reggiano.\n\nIt is hard to classify pizza rustica as it is part pastry, part quiche, part pie, and part pizza at the same time. The dish is traditionally prepared for Easter and it is usually served at room temperature as an appetizer. Even though pizza rustica is Italian in origin, it is also popular in the Italian-American community in the United States of America.\n",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Fugazzeta",
    origin: "Argentina, South America",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/2cd66aff967748e7bc9e4ff227c09182.jpg?w=905&h=510",
    description:
      "Fugazzeta is a mozzarella-stuffed pizza topped with onions, originating from Argentina. The onions should be thinly sliced, and they can be either raw or sautéed. The dough is usually made with milk, water, yeast, flour, sugar, salt, and olive oil.\n\nIt is believed that fugazzeta evolved from fugazza, a non-stuffed pizza that is topped with onions, and fugazza itself evolved from the Italian focaccia. When sautéed vegetables such as spinach are added to fugazzeta, it is then called fugazzeta de verdura, and when slices of ham are added to fugazzeta, it is known as fugazzeta con jamon.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Detroit-Style Pizza",
    origin: "Detroit, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/ea31100f001e498ab9878a1f30a743f8.jpg?w=905&h=510",
    description:
      "Detroit-style pizza is a square pizza characterized by a thick deep-dish crisp crust and inverted toppings. Cheese is applied directly to the top of the dough, followed by a thick tomato sauce that is seasoned with garlic and spices. The most common topping is pepperoni, put either on top of the sauce or buried underneath the cheese.\n\nDetroit-style pizza can be traced back to Buddy's Rendezvous in 1946, and thanks to its popularity, it is now available nationwide. This dish is best paired with beer or wine.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Garlic Fingers",
    origin: "Nova Scotia, Canada",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/f25d57252a224133a289baa315fe6375.jpg?w=905&h=510",
    description:
      "Garlic fingers is a popular food item throughout Atlantic Canada. Even though it looks like a pizza, garlic fingers are cut in strips or fingers instead of being cut into slices like a regular pizza. The dish consists of pizza dough that is topped with cheese, garlic butter, and parsley.\n\nIt is baked until the cheese melts, and it can then be additionally topped with dill, vegetables, or pieces of bacon. Garlic fingers are often consumed with regular pizza as a side dish, and they are typically accompanied by dipping sauces such as Donair or marinara. ",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Pesto Genovese",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/6270f4b8af884697b0968d4566e21480.jpg?w=905&h=510",
    description:
      "Pizza pesto Genovese is a variety of Italian pizza that is traditionally topped with pieces of mozzarella di bufala and the famous pesto Genovese sauce. The pizza is typically finished off with a drizzle of olive oil before serving.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Carbonara",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/6c6690413c134dc18c3d7b38991f7aaf.jpg?w=905&h=510",
    description:
      "This pizza variety is a variation on the famous Italian pasta dish known as pasta carbonara. Pizza carbonara consists of a basic pizza dough covered with tomato sauce and topped with slices of salty pancetta, eggs, and cheese. Mozzarella and Grana Padano are the traditional cheese choices for this pizza variety, although Provolone or Pecorino Romano cheeses are also commonly used.\n\nThe pizza is usually drizzled with olive oil and sprinkled with basil or parsley and black pepper, another essential trait of pasta carbonara. The eggs are typically raw and cooked directly onto the pizza, which requires skillful timing, but some versions call for boiled and sliced eggs, which are then arranged on top of the pizza.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza e Fichi",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/0f0d735a35a3433caf631c19bfaf5e42.jpg?w=905&h=510",
    description:
      "Pizza e fichi is a variety of pizza bianca, which is usually topped with mozzarella, garlic, salt, olive oil, and, sometimes, rosemary leaves. This Roman version of pizza bianca, called pizza e fichi, is essentially the same, apart from the fact that it is additionally topped with chopped pieces of succulent figs.\n\nThe best figs are available in September, or sometimes in late August, making pizza e fichi a highly seasonal pizza variety.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Grandma Pie",
    origin: "Long Island, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/c3278cf1940d452cb27760e507360f4a.jpg?w=905&h=510",
    description:
      "Grandma pie is an American pizza variety that differentiates itself by the crust – due to the fact that the dough isn't allowed to proof for a long time, it turns out thin and dense. The pizza is baked in metal pans, resulting in rectangular slices that are crispy on the bottom.\n\nIt is typically topped with shredded mozzarella, tomato sauce, garlic, and olive oil, although there are numerous variations with added ingredients such as sausages and broccoli rabe. Grandma pie originated on Long Island at a family-run restaurant called Umberto's.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Fiori di Zucca",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/861512b1bd1a48ea898b8e62d4c7abf1.jpg?w=905&h=510",
    description:
      "This is a variety of Italian pizza that is traditionally topped with mozzarella cheese, zucchini flowers, olive oil, and salted anchovies. If one is using the untraditional method, it is recommended to add some black pepper and garlic for extra flavor.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pugliese Pizza",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/8496e506abc84185801b2b52390e3640.jpg?w=905&h=510",
    description:
      "As the name suggests, this classic Italian pizza variety is named after the region of Puglia. In its simplest form, the basic pizza dough is topped with tomato sauce, mozzarella, and red onion rings. Typical variations include replacing mozzarella with Provolone or Pecorino cheese and adding other ingredients such as anchovies, oregano, capers, or olives.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Fugazza",
    origin: "Argentina, South America",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/5ab9fd06902d4aceaa47f407c508d11d.jpg?w=905&h=510",
    description:
      "Similar to the Genovese focaccia, fugazza is one of many traditional Argentinian dishes that was influenced by the Italian cuisine. It is made with sourdough and comes topped with a generous amount of caramelized onions. Fugazza's crust is usually a bit thicker, but neutral in flavor.\n\nSome typical Mediterranean ingredients are occasionally added to the dish, such as sliced olives, artichokes, or grated parmesan cheese. However, the simple, traditional version, which includes sautéed caramelized onions and oregano is still the favorite among Argentinians. \n",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Vegetariana",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/b44b470fae3648d0bffd06aa9e7b782c.jpg?w=905&h=510",
    description:
      "As the name suggests, this Italian pizza variety is created to appeal to the vegetarian palate. Pizza vegetariana consists of a basic pizza dough that is smeared with tomato sauce and topped with mozzarella and a combination of fresh, seasonal vegetables, typically zucchini, eggplants, and peppers, which are almost always pre-cooked.\n\nOther typical toppings include bell peppers, artichoke hearts, spinach, carrots, onions, mushrooms, capers, celery, olives, and oregano. The pizza is usually finished off with a drizzle of olive oil and some fresh basil leaves on top. Pizza vegetariana can easily become a vegan-friendly dish by omitting the mozzarella.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Chicago Thin Cust Pizza",
    origin: "Chicago, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/63b2be3022aa4c05b1de72b52435c05a.jpg?w=905&h=510",
    description:
      "Apart from the crispy, almost cracker-thin crust, this Chicago-style pizza features a heavily herbed, zesty tomato sauce and generous amounts of shredded mozzarella. As for the other toppings, pepperoni is widely available but often comes second to crumbled Italian sausage, and then there's also bacon, prosciutto, and a variety of vegetables.\n\nThe number one choice among locals, Chicago thin crust is typically cut into squares—the so-called box cut, tavern-style, or party cut—and unlike its New York counterpart, it doesn't fold up. In fact, the Chicagoans would say you should \"fold your laundry, not your pizza\".",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Tomato Pie",
    origin: "New Jersey, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/3123da663eb4417baab38888d9723f19.jpg?w=905&h=510",
    description:
      'Tomato pie (New Jersey-style) is a thin-crusted dish that inverts the typical pizza\'s "sauce on the bottom, cheese on top" formula, and it is basically pizza in reverse. Dating back to the 19th century, this dish is derived from Sicilian pizza and is typically found in Sicilian-American communities.\n\nThe ingredients are mostly the same as for the regular pizza, the only difference being that the cheese in tomato pie is added first, while the tomatoes are added on top. Ideally, the crust should be thick and crispy. Although there are many varieties of tomato pie, pizza joints in Trenton, New Jersey are said to follow the most authentic recipe.',
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza alla Diavola",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/1ade887db3a744e3a8637ef1b729d3a8.jpg?w=905&h=510",
    description:
      "Diavola is a variety of Italian pizza that is traditionally topped with tomato sauce, mozzarella cheese, spicy salami, and hot chili peppers. Black olives are optional and can be added for extra flavor.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Quattro Stagioni",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/1596b88a2bf643c6b6e15f648c7ce231.jpg?w=905&h=510",
    description:
      'Another popular variety of Italian pizza, quattro stagioni (lit. four seasons) is basically made with the same ingredients as the so-called pizza capricciosa, except it has toppings arranged into four sections, each representing a different season.\n\nAs with capricciosa, the ingredients include an ever-changing combination of tomatoes, mozzarella, mushrooms, artichokes, ham, and olives. Sometimes, these "seasons" are divided by thin strips of pizza dough.',
    canBeDeleted: false,
  },
  {
    id: "",
    name: "California-Style Pizza",
    origin: "California, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/d75fa85a425544729c85dc735f7fb083.jpg?w=905&h=510",
    description:
      "Invented at the same time in 1980 by Ed LaDou and the chefs at the famous restaurant Chez Panisse, this type of pizza is characterized by combining New York and Italian thin crust with unique and unusual topping combinations. The crust is light, airy, and tender, while the toppings range from shrimp and asparagus to smoked salmon and other seafood.\n\nSome of the other toppings include ingredients such as chicken, peanut sauce, barbecue sauce, goat cheese, and pineapples. California-style pizza should be paired with beer or white wines, including the sparkling varieties.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Prosciutto",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/9cfa8881adeb446f9af113030035e75c.jpg?w=905&h=510",
    description:
      "Thin slices of salty prosciutto cotto or cooked ham, creamy mozzarella cheese, and a robust tomato sauce spread over a basic pizza dough make the pizza variety known as pizza prosciutto. This traditional pizza is usually drizzled with olive oil, seasoned with oregano, and garnished with fresh basil leaves.\n\nPizza prosciutto can be enriched with the addition of other ingredients such as artichoke hearts, mushrooms, or olives.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza ai Frutti di Mare",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/2475b8aa94c1463dbe9dc17e0f38a063.jpg?w=905&h=510",
    description:
      "Pizza ai frutti di mare is a variety of Italian pizza topped with seafood such as scampi, squid, and mussels. Traditionally, the pizza is served without any cheese, as the seafood is placed on top of the dough and tomato sauce instead. Pizza ai frutti di mare is popular throughout Italy and Mediterranean countries such as Croatia.\n\nIt is recommended to top it off with a drizzle of olive oil and pair it with a glass of chilled white wine.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Greek-Style Pizza",
    origin: "New England, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/0414b9fe18e04837b2cd388aca75e7ef.jpg?w=905&h=510",
    description:
      "Greek pizza was created by Greek immigrants in Boston, in the late 1960s. It is characterized by its thick, wettish dough, greasy cheese, and tomato sauce with a strong taste of oregano. This type of pizza is usually baked in a heavily greased pan, which results in a lacy, crisp edge and fried bottom crust.\n\nGreek ingredients such as artichokes, feta cheese, and Kalamata olives are favorable for the toppings, and although not necessary; pepperoni is also often used as a topping. As this dish does not reheat well, it is advised to consume it within the first fifteen minutes after baking.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Romana",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/70b4aaf4a4964caf830bb1199d08f58a.jpg?w=905&h=510",
    description:
      "The main thing about pizza Romana is its crust: thin, extremely crunchy, and almost cracker-like, which is why it is also known under the name scrocchiarella, meaning the crunchy one. There are a few things that make this pizza so light and crispy: olive oil - added to the basic dough - and less water in the mixture - the maximum hydration of the dough is up to 55 %.\n\nDue to a harder consistency, this dough must be stretched with a rolling pin, unlike the softer Neapolitan variety that is shaped by hand with almost acrobatic moves while being tossed in the air. Once shaped, the dough is covered with a sparse layer of tomato sauce and chosen toppings – they can vary, but the most traditional combination would include mozzarella, anchovies, capers, chopped basil, and pecorino. ",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Primavera",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/6800e407553543fbb36d5fc386fba1e0.jpg?w=905&h=510",
    description:
      "This Italian pizza variety is prepared with a base of classic pizza dough that is topped with mozzarella and then shortly baked. The fresh ingredients added on top typically include cherry tomatoes, arugula, prosciutto, and parmesan cheese shavings.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Stromboli",
    origin: "Philadelphia, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/9269ff0fb7574ebb9a03a6a76fc1950f.jpg?w=905&h=510",
    description:
      "Somewhat similar to a calzone, the American stromboli is a savory type of turnover filled with classic pizza ingredientsIds: mozzarella or other types of cheese, Italian meats like salami, pepperoni, bresaola, and capocollo, and sometimes even vegetables, while the marinara sauce is served on the side, rather than baked inside with the filling.\n\nThe dough can be either Italian bread dough or standard pizza dough, and before baking, the finished product is rolled into a loaf, similar to that of a jellyroll. Unlike calzone, stromboli did not originate from Italy, but supposedly from suburban Philadelphia where it was invented in the 1950s and named after one of Roberto Rossellini's movies.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza ai Funghi",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/fe9625130240429e9292203b33ed2ab1.jpg?w=905&h=510",
    description:
      "Funghi is a variety of Italian pizza that is traditionally topped with tomato sauce, mozzarella cheese, mushrooms, oil, and parsley.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizzette",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/b5ed9379a0864a43b03145e00deef8db.jpg?w=905&h=510",
    description:
      "Pizzetta is a small version of pizza that varies in size and shape, so some pizzettas can even be prepared in the shape of a heart. It is made in the same way as a regular, large pizza, consisting of a dough base (or puff pastry) topped with sauces, cheeses, and various additional ingredients.\n\nThe dish is usually served as an appetizer, a quick snack, or a light meal. In Rome's bakeries, pizzette are often sold by weight, and if you order an apéritif at a café, you might even get a complimentary pizzetta with your order.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Bianca",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/ed75d2da50eb44328ec5fd77a0696326.jpg?w=905&h=510",
    description:
      "Pizza bianca or white pizza is a variety of pizza which omits tomato sauce from the equation, often substituting it with pesto or sour cream. In Rome, pizza bianca is prepared with no sauce whatsoever, and it is instead topped with salt, olive oil, or chopped rosemary.\n\nThere are numerous versions of pizza bianca, and the toppings vary accordingly, but the crucial element in all of them is that there should not be any kind of red sauce on the dough.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Hawaiian Pizza",
    origin: "Canada, North America",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/0c232387a1064e27bd5b3a098a87acd9.jpg?w=905&h=510",
    description:
      "Despite its name, Hawaiian pizza is a Canadian invention, a classic American-style pie topped with cheese, ham, and pineapple chunks. It was originally created by Sam Panopoulos in Ontario in the mid-1960s, when he added pineapple to the dish and started serving it to the customers of his Satellite Restaurant.\n\nThe customers loved it, and Hawaiian pizza soon made its way to the rest of Canada and the United States of America.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Capricciosa",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/6b28b438a3b64a7e9fca9081c89f07ff.jpg?w=905&h=510",
    description:
      "The name of this pizza literally translates to capricious, and seems quite appropriate, considering that the toppings tend to vary from one region to another. Capricciosa is made with an ever-changing combination of ingredients which most often include tomatoes, mozzarella, mushrooms, artichokes, ham, olives, and a sliced hard-boiled egg, whereas in central and northern Italy, it is not uncommon to add capers, sausages, and sometimes even anchovies.\n\nOne of Italy's favorite pizza varieties of the 1980s, capricciosa still sells well and is once again becoming increasingly popular.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Manakish",
    origin: "Lebanon, Asia",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/99e1c206d25a4bf0adc3fcdb2d9979cd.jpg?w=905&h=510",
    description:
      "Manakish is a favorite Lebanese breakfast - a round, flat bread that is typically topped with olive oil and zaatar (sesame seeds, thyme, and sumac), then baked in the oven. Other toppings might include cheese, minced lamb, spinach, or fried eggplants.\n\nThe name of the dish means decorated or stamped, referring to a technique where the dough is pressed using the tips of one's fingers, leaving a decorative pattern in the process. Although it is sometimes affectionately called Lebanese pizza, it is a recent addition to the Lebanese culinary heritage, but it quickly became one of the most popular dishes due to its flavors, low price, and the ease of preparation. ",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Sicilian Pizza",
    origin: "New York, USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/c3e2d5afed28426881ff542ef28cebf7.jpg?w=905&h=510",
    description:
      "In the United States, Sicilian pizza denotes a thick, square-shaped dough topped with mozzarella cheese and tomato sauce. The sauce is often placed on top of the cheese in order for the crust to be well-cooked. This pizza was brought to the United States (primarily New York) by Sicilian immigrants, and it was derived from sfincione.\n\nAlthough sfincione doesn't contain mozzarella, Italian bakeries in NYC had access to inexpensive mozzarella so it was only logical that they began to top their sfincione with it. Nowadays, Sicilian-style pizza is popular in numerous Italian-American communities in New York, New Jersey, Michigan, Connecticut, Rhode Island, and Massachusetts.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Quattro Formaggi",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/e6f2310a7ffe4904bc9826bfc77ee11f.jpg?w=905&h=510",
    description:
      "Quattro formaggi is a variety of Italian pizza topped with a combination of four kinds of cheese, as the name suggests. Traditionally, the cheeses should be mozzarella and three other, local cheeses, depending on the region, such as Gorgonzola, Fontina, and Parmigiano-Reggiano.\n\nOptionally, the pizza can be further enriched with the addition of basil and tomato. The combination of cheeses gives the pizza an unusual, unique flavor that is loved by cheese-aficionados all over the world.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Caprese",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/5c9ef8900b4d4afc8313a2e282574b7f.jpg?w=905&h=510",
    description:
      "This is a variety of Italian pizza that is traditionally topped with cherry tomatoes, mozzarella di bufala, olive oil, and fresh basil leaves. It provides a great way to use up leftover tomatoes, and some cooks like to finish it off with a drizzle of balsamic reduction on top.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pepperoni Pizza",
    origin: "USA",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?w=905&h=510",
    description:
      "Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a corrupted form of peperoni (one “p”), which denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.\n\nThe popularity of pepperoni pizza had only started to rise in the 1950s. Nowadays, beef pepperoni pizza is the most popular pizza variety, but there are also versions such as fish pepperoni pizza and port pepperoni pizza. The preparation varies from one state to another, but the popularity of this pizza has made it a staple across the United States, and it’s usually prepared simply with mozzarella, tomato sauce, and pepperoni.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Calzone Pizza",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/2dd9d07402f9404bb1149da811a0c42d.jpg?w=905&h=510",
    description:
      "This unique type of pizza is characterized by its half-round shape, made by folding a full-sized pizza in half. Hailing from 18th century Naples, calzone literally means pant leg, referring to the fact that calzone's original purpose was to be a pizza which can be consumed while walking or standing.\n\nTypically, calzones are filled with meats such as salami or ham and cheeses such as mozzarella, ricotta, parmesan, and pecorino whereas fried calzones with mozzarella and tomatoes are a specialty from the Italian region of Apulia, and are known as panzerotti. ",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Marinara",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/5560ca794b7d49f7bdbfc1c27d65b39d.jpg?w=905&h=510",
    description:
      "Marinara is a Neapolitan pizza with a topping of tomatoes, oregano, garlic, extra virgin olive oil, and sometimes fresh basil. Its name is not derived from the popular belief that it has seafood on it (because it does not), but because it was a staple food of the fishermen who consumed it upon their return home from fishing in the Bay of Naples.\n\nSome claim it was invented at Pizzeria Port'Alba in 1734, considered the oldest pizzeria in the world. Marinara is a part of protected Napoletana pizzas, with specific rules concerning the production process, the dough, and the key ingredients used in making the pizza.",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Margherita",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/3b95e478a76a48a0897c6724d32e2509.jpg?w=905&h=510",
    description:
      "Pizza Margherita is a delicacy that is literally fit for a queen. In 1889, Queen Margherita of Savoy visited Naples, where she was served a pizza that was made to resemble the colors of the Italian flag: red tomatoes, white mozzarella cheese, and green basil.\n\nIt was made by a chef named Raffaele Esposito of Pizzeria Brandi, who is credited for its invention. The Queen loved the dish, and Esposito named it after her - pizza Margherita, but such a pizza was also made before that time, and can be dated back to at least 1866, when the most popular pizza toppings included basil, cheese, and tomatoes, but the pizza was not yet named Margherita. ",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Napoletana",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://cdn.tasteatlas.com/images/dishes/785295d4ab6f4f0bab43d5fcf2e123b6.jpg?w=905&h=510",
    description:
      "Italy’s most emblematic culinary creation, the genuine pizza Napoletana is made with just a few simple ingredients and prepared in only two variations – marinara, the basic Neapolitan pizza topped with a tomato-based sauce flavored with garlic and oregano, and margherita, which is topped with tomatoes, mozzarella, and fresh basil leaves, a delicious combination whose colors are said to represent the Italian flag.\n\nThe crust is very thin at the base, and the dough puffs up on the sides, which results in airy crust that should have typical charred 'leopard spots' if baked properly. The origins of this iconic Neapolitan dish can be traced to the early 1700s, when what we know today as pizza marinara was first described by Italian chef, writer, and philosopher Vincenzo Corrado in his treatise on the eating habits of the people of Naples. ",
    canBeDeleted: false,
  },
  {
    id: "",
    name: "Pizza Margerita Ivan",
    origin: "Italy, Europe",
    ingredientsIds: generateRandomIngredients(allIngredients),
    image:
      "https://res.cloudinary.com/catalin/image/upload/v1613562364/ivan_pizza/posnr0onymp5mbwwdwro.jpg",
    description: "asdasdasdasdasd",
    canBeDeleted: true,
  },
];
