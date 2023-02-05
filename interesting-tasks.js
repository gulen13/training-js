// // -------------------------ПОИСК САМОГО ДЛИННОГО СЛОВА-----------------------------

function findLongestWord(string) {
  // Change code below this line
  let words = string.split(" ");
  let maxLength = 0;
  let longestWord;

  for (let word of words) {
    let wordLength = word.length;
    if (wordLength > maxLength) {
      maxLength = wordLength;

      longestWord = word;
    }
  }
  console.log(longestWord);
  return longestWord;
  // Change code above this line
}
// findLongestWord("Google do a roll");

// ------------------------------------------------------------------------------------


// // ------------------ПОИСК ОБЩЕГО ЭЛЕМЕНТА и ЗАБРОС В НОВЫЙ МАССИВ------------------

function getCommonElements(array1, array2) {
  // Change code below this line
  let commonElements = [];

  for (let i = 0; i < array1.length; i += 1)
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }

  return commonElements;
  // Change code above this line
}
// -----------------------------------------------------------------------------------

// // --------------------- ЗАДАЧА С МАГАЗИНОМ ОБЪЕКТЫ В МАССИВЕ -------------------!!!

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    let arrayPotions = [...this.potions];
    console.log(arrayPotions);
    return arrayPotions
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {

      if (potion.name === newPotion.name) {

        return `Error! Potion ${newPotion.name} is already in your inventory!`
      }
    }
    this.potions.push(newPotion);
    return
  },
  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (potionName === potion.name) {
        potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        console.log(potions);
      }
    }
    return `Potion ${oldName} is not in inventory!`
  },
};
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");

//  -----------------------------------------------------------------------------------

//  --------------------- ПЕРЕБОР ПИЦЦ ЧЕРЕЗ КОЛБЭК -----------------------------------

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (let pizza of this.pizzas) {
      if (pizzaName === pizza) {
        return onSuccess(pizzaName);
      }
    }
    return onError(pizzaName);
  }
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(pizzaName) {
  return `There is no pizza with a name ${pizzaName} in the assortment.`;
}

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// // pizzaPalace.order("Four meats", makePizza, onOrderError);
// // pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // pizzaPalace.order("Vienna", makePizza, onOrderError);

// ------------------------------------------------------------------------------------