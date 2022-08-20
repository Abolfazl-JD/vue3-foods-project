import { defineStore } from 'pinia'

export const storeData = defineStore({
  id: 'counter',
  state: () => ({
    fooddata : [
      {
          "menu": [
              {
                  "description": "Whole shrimp in a translucent wrapper.har gow (xia jiao), or steamed shrimp dumplings, are often the most popular item ordered, and one of the classic dishes on which dim sum chefs used to be judged. Silky on the outside with a chewy and flavorful filling, these dumplings are made of translucent wrappers that hold a shrimp and vegetable mixture seasoned with rice wine and sesame oil. It makes for a flavorful, delicate, and light-tasting pocket of food. The most challenging part of har gow is handling the dough, which is very sticky and can break apart easily, but as long as you follow the instructions, get multiple people involved, and don't rush, it's a rewarding effort.",
                  "item": "Dumplings",
                  "img": "dimsum-shrimp.jpg",
                  "id": "22672b93-2c65-4fd9-b151-683f7eb7df4a",
                  "price": 6.49,
                  "addOns": [
                      "mango pudding",
                      "none",
                      "steamed sesame ball",
                      "sweet tofu"
                  ]
              },
              {
                  "description": "Dumplings filled with pork, crab meat and broth. Chinese Soup Dumplings, or xiaolongbao (小笼包), are perhaps the most perfect single bite of food ever conceived by man. This tantalizing, dreamy snack is probably the most famous dish to come out of the Jiangnan region of China. It is often associated with the city of Shanghai (the largest city in the region by population, and also the largest city in all of China!), which is why soup dumplings are often called “Shanghai Soup Dumplings.        If youve never tried xiaolongbao and dont have any authentic Chinese restaurants near you that serve them, we have good news. You can make soup dumplings at home! ",
                  "item": "Soup",
                  "img": "dimsum-soup.jpg",
                  "id": "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
                  "price": 9.99,
                  "addOns": [
                      "mango pudding",
                      "none",
                      "steamed sesame ball",
                      "sweet tofu"
                  ]
              },
              {
                  "description": "Chinese eggplant filled with ground shrimp in sauce Eggplants are stuffed with meat (lamb or beef) and bulgur or rice but a bit distinctly than its neighbors because of a wider use of different flavors of the dish by region like tamarind, date, etc., also there is a wider use of spices than there is in Iran, Turkey and Azerbaijan. The ingredients include eggplant, minced meat, rice, bulgur, onion, tomato paste, sumac, tamarind juice, lemon juice, date honey, allspice, cinnamon, nutmeg, pine nuts, almonds, walnuts, tomato, parsley, mint, salt, black pepper and olive oil.",
                  "item": "Eggplant",
                  "img": "dimsum-eggplant.jpg",
                  "id": "cadd2903-b9cb-4053-9720-c096cc95e8a5",
                  "price": 5.59,
                  "addOns": [
                      "mango pudding",
                      "none",
                      "steamed sesame ball",
                      "sweet tofu"
                  ]
              }
          ],
          "meal": [
              "Breakfast",
              "Dinner",
              "Lunch"
          ],
          "rating": 4.9,
          "deliveryTime": 35,
          "freeDelivery": true,
          "id": "1f9500d2-fd27-422e-acc6-48198d0de5c2",
          "name": "All that and Dim Sum"
      },
      {
          "menu": [
              {
                  "description": "Design your own pizza. Pepperoni is an American variety of spicy salami made from cured pork and beef seasoned with paprika or other chili pepper               Prior to cooking, pepperoni is characteristically soft, slightly smoky, and bright red.[1] Thinly sliced pepperoni is one of the most popular pizza toppings in American pizzerias",
                  "item": "peperoni",
                  "img": "pizza-plain.jpg",
                  "id": "7644eba9-d6a8-466f-bd49-781bc005cfe5",
                  "addOns": [
                      "extra cheese",
                      "green pepper",
                      "mushrooms",
                      "none",
                      "onions",
                      "pepperoni",
                      "sausage",
                      "tomatoes"
                  ],
                  "price": 17.99
              },
              {
                  "description": "A Carnivore’s delight. Pepperoni, Sausage, Salami & Canadian Bacon. The meat toppings can vary, but often include cooked and crumbled Italian sausage or ground beef, bacon, pepperoni, and sometimes sliced ham. Pepperoni might be the most common American pizza topping, sold as little packages of small round disks. But pepperoni is actually a variety of salami that is made from beef and cured pork along with seasonings such as chili pepper and paprika. The red color comes from the paprika and the characteristic touch of heat is from the chili pepper.",
                  "item": "MeatLovers",
                  "img": "pizza-meat.jpg",
                  "id": "70ceec44-3ccb-4f92-b149-0ebe2c10704b",
                  "price": 17.99,
                  "addOns": [
                      "extra cheese",
                      "green peppers",
                      "mushrooms",
                      "none",
                      "onions",
                      "pepperoni",
                      "sausage",
                      "tomatoes"
                  ]
              },
              {
                  "description": "Tomatoes, Olives, Garlic, Onions, Mushrooms & Bells. This vegetarian pizza recipe will delight vegetarians and carnivores alike. It’s fresh and full of flavor, featuring cherry tomatoes, artichoke, bell pepper, olives, red onion and some hidden (and optional) baby spinach. You’ll find a base of rich tomato sauce and golden, bubbling mozzarella underneath, of course.",
                  "item": "Veggie",
                  "img": "pizza-veggie.jpg",
                  "id": "b27f4d8e-7235-42f9-b0a7-98e76a1afaf0",
                  "price": 17.99,
                  "addOns": [
                      "extra cheese",
                      "green peppers",
                      "mushrooms",
                      "none",
                      "onions",
                      "pepperoni",
                      "sausage",
                      "tomatoes"
                  ]
              }
          ],
          "meal": [
              "Dinner",
              "Lunch"
          ],
          "rating": 4.5,
          "deliveryTime": 40,
          "freeDelivery": false,
          "id": "e1e569e5-7b75-42cf-8fc3-7638d6c940f8",
          "name": "A Real Pizza Work"
      },
      {
          "menu": [
              {
                  "item": "Taco",
                  "img": "taco-taco.jpg",
                  "price": 3.45,
                  "addOns": [
                      "avocado",
                      "none",
                      "pico de gallo",
                      "sour cream"
                  ],
                  "options": [
                      "Al Pastor",
                      "Carne Asada",
                      "Carnitas",
                      "Lengua",
                  ],
                  "description": "Soft tortilla, your choice of meat, onions, cilantro & salsa A taco (US: /ˈtɑːkoʊ/, UK: /ˈtækoʊ/, Spanish: [ˈtako]) is a traditional Mexican food consisting of a small hand-sized corn- or wheat-based tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, beans, vegetables, and cheese, allowing for great versatility and variety. They are often garnished with various condiments, such as salsa, guacamole, or sour cream, and vegetables, such as lettuce, onion, tomatoes, and chiles. Tacos are a common form of antojitos, or Mexican street food, which have spread around the world.",
                  "id": "e85dbacc-f721-44e6-af8c-eda2835e2e50"
              },
              {
                  "item": "Quesadilla",
                  "img": "taco-quesadilla.png",
                  "price": 7,
                  "addOns": [
                      "guacamole",
                      "none",
                      "pico de gallo",
                      "sour cream"
                  ],
                  "options": [
                      "Carne Asada",
                      "Plain",
                      "Pollo"
                  ],
                  "description": "Flour tortilla, melted cheese & optional meat choice. A quesadilla (/ˌkeɪsəˈdiːjə/; Spanish: [kesaˈðiʝa] (listen); Spanish diminutive of quesada[1][2]) is a Mexican dish consisting of a tortilla that is filled primarily with cheese, and sometimes meats, spices, and other fillings, and then cooked on a griddle or stove.[3] Traditionally, a corn tortilla is used, but it can also be made with a flour tortilla.                 A full quesadilla is made with two tortillas that hold a layer of cheese between them. A half is a single tortilla that has been filled with cheese and folded into a half-moon shape",
                  "id": "e956a779-941f-41ef-874e-d5f6a6c6e0cb"
              },
              {
                  "item": "Burrito",
                  "img": "taco-burrito.jpg",
                  "price": 6.59,
                  "addOns": [
                      "avocado",
                      "pico de gallo",
                      "queso",
                      "sour cream"
                  ],
                  "options": [
                      "Al Pastor",
                      "Carne Asada",
                      "Carnitas",
                  ],
                  "description": "Any meat, rice, beans, onions, cilantro & salsa. A burrito (English: /bəˈriːtoʊ/, Spanish: [buˈrito] (listen))[1] is a dish in Mexican[2] and Tex-Mex cuisine[3] that took form in California cuisine, consisting of a flour tortilla wrapped into a sealed cylindrical shape around various ingredients.[4] The tortilla is sometimes lightly grilled or steamed to soften it, make it more pliable, and allow it to adhere to itself. Burritos are often eaten by hand, as their tight wrapping keeps the ingredients together. Burritos can also be served Burritos are filled with savory ingredients, most often a meat such as beef, chicken, or pork, and often include other ingredients, such as rice, cooked beans (either whole or refried), vegetables, such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema",
                  "id": "ecd7c207-acd7-4b58-8685-894ba622949e"
              }
          ],
          "meal": [
              "Dinner",
              "Lunch"
          ],
          "rating": 4.7,
          "deliveryTime": 25,
          "freeDelivery": true,
          "id": "f71400ed-26b1-43d0-940c-7cabd3546dc6",
          "name": "Taco bout Eating Tacos"
      }
    ]
  })
})
