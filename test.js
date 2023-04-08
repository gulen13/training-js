// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = (message.toLowerCase());
//   if (message.includes("sale" || "spam")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   console.log(result);
//   return result;
// }
// checkForSpam('Amazing SAlE, only tonight!');

// let message = "CvbhjnKLM";
// message = (message.toLowerCase());
// console.log(message);

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const normalizedMessage = (message.toLowerCase());
//   result = normalizedMessage.includes("spam") || normalizedMessage.includes("sale");
//   // Change code above this line
//   console.log(result);
//   return result;
// }
// checkForSpam('Amazing SAlE, only tonight!');

// function rentalCarCost(d) {
//   const rentalCost = 40;
//   let sumRentCost

//   if (d >= 7) {
//     sumRentCost = (d * rentalCost) - 50;
//   } else if (d >= 3 && d <= 6) {
//     sumRentCost = (d * rentalCost) - 20;
//   } else {
//     sumRentCost = d * rentalCost;
//   }
//   console.log(sumRentCost);
//   return sumRentCost;
//   // Your solution here
// }
// rentalCarCost(4);

// function removeChar(str) {
//   //You got this!
//   let newString = (str.slice(1, - 1));
//   console.log(newString);
//   return newString;
// }
// removeChar("fvgbhnjk");

// Попробовать написать в консоль случайное округленное число от 1 до 10. Записать в блокнот.

// console.log(Math.round(Math.random() * (10 - 1) + 1));

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length); // 3

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// function getAge(inputString) {
//   // return the girl's correct age as an integer. Happy coding :) 

//   let message = (parseInt(inputString));
//   console.log(message);
//   return message;
// }
// getAge("1345 year old");

// function digitize(n) {
//   let x = n.toString().split('');
//   let newString = x.reverse();
//   console.log(newString);
//   return [parseInt(newString)];
// }
// digitize("32546");

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const twoElem = [firstElement, lastElement];
//   console.log(twoElem);
//   return twoElem;
//   // Change code above this lines
// }
// getExtremeElements([1, 2, 3, 4]);

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   console.log(words);
//   return words;
// }
// splitMessage("456 2453 3243", " ");

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let array = message.split(" ");
//   let arrayCount = array.length;
//   let cost = arrayCount * pricePerWord;

//   console.log(cost);
//   return cost;
//   // Change code above this line
// }
// calculateEngravingPrice("cfvgh vghbj vbn", "50");

// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase().split(" ").join("-");
//   // let slug = title.toLowerCase().split(" ").join("-");
//   console.log(normalize);
//   // Change code above this line
// }
// slugify("CVGgbhjn hbnm HJKNM bnm");

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   let arrayConcat = firstArray.concat(secondArray);
//   const arrayLength = arrayConcat <= maxLength ? arrayConcat : arrayConcat.slice(0, maxLength);
//   // Change code above this line
//   console.log(arrayLength);
//   return arrayLength;
// }
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);




// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   // numbers.push(min);
//   // numbers.push(max);

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(14, 17);

// function filterArray(numbers, value) {
//   // Change code below this line
//   let number;
//   let newArray = [];

//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }

//   }
//   console.log(newArray);
//   return newArray;
// }

// filterArray([12, 24, 8, 41, 76], 38);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit) ? true : false;
// }
// checkFruit("plum");

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }
// };
// console.table(apartment);
// console.log(typeof (apartment));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// console.log(lastTag);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// let apartmentTags = apartment.tags;
// // Change code below this line
// console.log(apartmentTags);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };
// console.log(credentials);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }
// console.table(values);

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   console.log(propCount);
//   return propCount;
// }
// countProps({});

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   let values = Object.values(salaries);
//   for (let value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line

//   console.log(values);
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   let price = null;

//   for (let product of products) {
//     if (productName === product.name) {
//       price = product.price;
//     }
//   }

//   console.log(price);
//   return price
// }
// getProductPrice("Raar");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let array = [];
//   for (const key of products) {
//     if (key[propName])
//       array.push(key[propName])
//   }

//   return array
//   // Change code above this line
// }
// getAllPropValues("name");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalSum = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalSum = product.price * product.quantity;
//     }
//   }


//   console.log(totalSum);
//   return totalSum
//   // Change code above this line
// }
// calculateTotalPrice("Blaster");


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// console.log(todayIcon);


// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;


//   // Change code above this line
//   console.log(todayHigh);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// });

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const defaultObject = { completed, category, priority };

//   const newObject = { ...defaultObject, ...data };

//   return newObject
//   // Change code above this line
// }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// // Change code below this line
// function add(...args) {
//   let array = args;
//   let summ = 0;
//   for (let i = 0; i < array.length; i++) {
//     summ += array[i];
//   }

//   console.log(summ);
//   // Change code above this line
// }
// add(15, 27);

// // Change code below this line
// function addOverNum(num1, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > num1) {
//       total += arg;
//     }
//   }

//   console.log(total);
//   return total;
//   // Change code above this line
// }
// addOverNum(10, 12, 4, 11, 48, 10, 8);

// Change code below this line
// function findMatches(array1, ...args) {
//   const matches = []; // Don't change this line

//   for (let number of array1) {
//     if (args.includes(number)) {
//       matches.push(number);
//     }
//   }
//   // Change code above this line

//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     console.log(bookShelf);
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("The last kingdom", "Dune");

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     console.log(this.potions);
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   console.log(callback(pizzaName));
//   return callback(pizzaName);
// }


// makeMessage("Royal Grand", makePizza);

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`)
// });

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (item) {
//     if (item > value) {
//       filteredNumbers.push(item)
//     }
//   });
//   console.log(filteredNumbers);
//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });


//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);


// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// calculateTotalPrice([12, 85, 37, 4]);

// debugger;


// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   })

//   return newArray;
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);

// // Change code below this line
// const getUserNames = users => {

//   users.map(user => user.name);

// };
//   // Change code above this line

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((averagePlaytime, player) => {
//   return averagePlaytime + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((author1, author2) => author1.localeCompare(author2));

// console.log(names);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((friend1, friend2) => friend1.localeCompare(friend2));
// };

// console.table(getSortedFriends(users));

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line4
// };
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));
// console.log(historyService.getOrdersLog());

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(parent.isPrototypeOf(child));

// class Car {

//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return this.price = newPrice;
//   }
// }

// const Car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 })

// Car1.changePrice(10000);

// console.log(Car1);

// class Storage {
//   constructor(array) {
//     this.items = array;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const itemIndex = this.items.indexOf(itemToRemove);
//     console.log(itemIndex);
//     this.items.splice(itemIndex, 1);
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     return this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car1.getBrand());
// console.log(car1.brand);

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }


//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     //   if (price > Car.#MAX_PRICE) {
//     //     return "Error! Price exceeds the maximum";
//     //   }
//     //   return "Success! Price is within acceptable limits";
//     // }

//     return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   AccessLevel;
//   constructor(BASIC, SUPERUSER) {
//     this.BASIC = "basic";
//     this.SUPERUSER = "superuser";
//   }
//   // AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// console.log(Admin.AccessLevel.BASIC);

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// function past(h, m, s) {
//   return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
// }

// console.log(past(1, 1, 1));

// function findNeedle(haystack) {
//   const needle = haystack.find(option => option.label === "blue");
// }

// function switchItUp(number) {
//   switch (number) {
//     case 0: return 'Zero';
//     case 1: return 'One';
//     case 2: return 'Two';
//     case 3: return 'Three';
//     case 4: return 'Four';
//     case 5: return 'Five';
//     case 6: return 'Six';
//     case 7: return 'Seven';
//     case 8: return 'Eight';
//     case 9: return 'Nine';
//   }
// }
// console.log(switchItUp(9));

// function minMax(arr) {


//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// function high(x) {


// }


// high('man i need a taxi up to ubud');

// function findNeedle(haystack) {
//   return 'found the needle at position ' + haystack.indexOf('needle');
// }

// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// console.log(findNeedle(haystack_1));

// const humanYearsCatYearsDogYears = function (humanYears) {
//   let catYears = 0;
//   if (humanYears === 1) {
//     catYears = 15;
//   } else if (humanYears === 2) {
//     catYears = 24;
//   } else if (humanYears > 2) {
//     catYears = 24 + (humanYears - 2) * 4;
//   }

//   let dogYears = 0;
//   if (humanYears === 1) {
//     dogYears = 15;
//   } else if (humanYears === 2) {
//     dogYears = 24;
//   } else if (humanYears > 2) {
//     dogYears = 24 + (humanYears - 2) * 5;
//   }


//   let totalYears = [];
//   totalYears.push(humanYears, catYears, dogYears);

//   return totalYears;
// }

// console.log(humanYearsCatYearsDogYears(10));

// var countSheep = function (num) {
//   let str = "";
//   for (let i = 1; i <= num; i++) { str += `${i} sheep...`; }
//   return str;
// }

// console.log(countSheep(2));
// console.log(countSheep(3));
// console.log(countSheep(1));
// console.log(countSheep(0));

// function high(x) {
//   let alphabets = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//   ];

//   let words = x.split(" ");
//   let highestScore = 0;
//   let highestScoreWord = "";

//   for (let word of words) {
//     let lettersSum = 0;

//     for (let letter of word) {
//       lettersSum += alphabets.indexOf(letter) + 1;
//     }

//     if (lettersSum > highestScore) {
//       highestScore = lettersSum;
//       highestScoreWord = word;
//     }
//   }

//   return highestScoreWord;
// }

// function likes(names) {
//   let str = "";
//   if (names = []) {
//     console.log('no one likes this');
//   } else if (names.length(1)) {
//     console.log(names[0]);
//   }
// }

// likes([]);
// likes(['Peter']);
// // console.log(likes(['Jacob', 'Alex']));
// // console.log(likes(['Max', 'John', 'Mark']));
// // console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// --------------------------- STRING + NAMES LIKES --------------------------------

// function likes(names) {
//   switch (names.length) {
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }

// console.log(likes(['Jacob', 'Alex']));

// function nbYear(p0, percent, aug, p) {

//   for (var years = 0; p0 < p; years++) {
//     p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//   }
//   return years
// }
// console.log(nbYear(1500, 5, 100, 5000));

// function nbYear(p0, percent, aug, p) {
//   var count = 0;
//   while (p0 < p) {
//     p0 = Math.floor((1 + percent / 100) * p0 + aug);
//     count++
//   }
//   return count;
// }

// console.log(nbYear(1500000, 2.5, 10000, 2000000));

// function cockroachSpeed(s) {
//   return Math.floor(s / 3600 * 100000);
// }

// console.log(cockroachSpeed(1.08));


// function cockroachSpeed(s) {
//   return Math.floor(s / 3600 * 100000);
// }

// function makeNegative(num) {
//   return -Math.abs(num);
// }

// console.log(makeNegative(56));

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(sonYearsOld * 2 - dadYearsOld);
// }

// console.log(twiceAsOld(36, 7))

// var min = function (list) {

//   // let minNum = 0;

//   // for (let i = 0; i <= list.length; i++) {
//   //   if (list[i] < list[0]) {
//   //     minNum = list[i];
//   //   }
//   // }

//   // return minNum;

//   // return Math.min.apply(null, list);
// }

// var max = function (list) {

//   // let maxNum = 0;

//   // for (let i = 0; i <= list.length; i++) {
//   //   if (list[i] > list[0]) {
//   //     maxNum = list[i];
//   //   }
//   // }

//   // return maxNum;

//   // return Math.max.apply(null, list);
// }

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// console.log(min([42, 54, 65, 87, 3]));
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

// function reverseWords(str) {

// let arrWords = str.split(' ');

// console.log(arrWords);

// let revWords = arrWords.map(word => word.split('').reverse().join(''));

// return revWords.join(" ");

//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });

// var array1 = [true, true, true, false,
//   true, true, true, true,
//   true, false, true, false,
//   true, false, false, true,
//   true, true, true, true,
//   false, false, true, true];

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(Boolean).length;
// }

// console.log(countSheeps(array1));

// function betterThanAverage(classPoints, yourPoints) {
//   let totalPoints = classPoints.reduce((a, b) => { return a + b });
//   let averagePoints = totalPoints / (classPoints.length);
//   console.log(totalPoints);
//   return averagePoints < yourPoints ? true : false;
// }
// console.log(betterThanAverage([2, 3], 5));

// function longest(s1, s2) {
//   // let array = s1.split('');

//   // return array.filter(
//   //   (a, index, array) => array.indexOf(a) === index
//   // );



//   return s1.split('').concat(s2.split('')).sort().filter(
//     (a, index, array) => array.indexOf(a) === index
//   ).join('');


// }
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }
// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   console.log(selectedOptionIndex);

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// const message = 'NodeJs is Cool';
// console.log(message);

// function descendingOrder(n){

// let array = (""+n).split("").map(Number);

// const descendingScores = array.sort((b, a) => a - b);

// return Number(descendingScores.join(''));

// }

// console.log(descendingOrder(3454389));

// function evenOrOdd(number) {

// // if ((number % 2) = 0) {
// //   return "Even";
// // }

// // return "Odd"

//   return (number % 2) === 0 ? "Even": "Odd";
// }

// console.log(evenOrOdd(7));


// String.prototype.toJadenCase = function () {

// let array = str.split(' ');
// let newArray = [];

// for (const word of array) {
// let b = word[0].toUpperCase() + word.slice(1);
// newArray.push(b);
// }

// let newString = newArray.join(' ');

//  return newString
// };

// var str = "How can mirrors be real if our eyes aren't real"

// console.log(String.prototype.toJadenCase(str))

// function domainName(url) {

// ------Мой вариант
//   if (url.includes("www")) {
//     let D = url.indexOf('.')
//     let word1 = url.slice(D + 1);
//     let D2 = word1.indexOf('.');
//     return word1.slice(0, D2);
//   } else if (url.includes('http')) {
//     let U = new URL(url);
//     let T = U.hostname.indexOf('.');
//     let N = U.hostname.length - T;
//     return U.hostname.slice(0, (U.hostname.length - N));
//   } else {
//     let D3 = url.indexOf('.')
//     return url.slice(0, D3);
//   }
//  -------Лучшый на codewars
// url = url.replace("https://", '');
// url = url.replace("http://", '');
// url = url.replace("www.", '');
// console.log(url.split('.')[0]);
// }
// domainName("www.xakep.ru")

// function toWeirdCase(string) {
//  -----------  Вариант 1
// var str = string.toLowerCase().split(''); // Переводим строку в нижний регистр, и разбиваем на массив. 
// var j = 0;
// for(var i = 0; i < str.length; i++){ // проходимся циклом по этим массивам
//     if(str[i] == ' '){
//         j = 0;
//         continue;
//     }
//     else{
//         if (j % 2 == 0){
//             str[i] = str[i].toUpperCase(); // переводим элемент с четным индексом в верхний регистр
//         }
//         j++;
//     }
// }
// return str.join('');

//  -----------  Вариант 2
// return string.split(' ').map(function(word){
//   return word.split('').map(function(letter, index){
//     return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
//   }).join('');
// }).join(' ');


//  -----------  Вариант 3
// var str = '';
// var counter = 0;

// for(var i = 0; i < string.length; i++) {
//   if(string[i] === ' ') {
//     str += ' ';
//     counter = 0;
//   } else if(counter % 2 === 0) {
//     str += string[i].toUpperCase();
//     counter++;
//   } else if(counter % 2 !== 0) {
//     str += string[i].toLowerCase();
//     counter++;
//   }
// }
// return str;

// }
// toWeirdCase('This is a test')

// const BASE_URL = 'http://localhost:3000/music/11'

// const newSong = {
//   "string": "Patch",
// }

// const options = {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// fetch(`${BASE_URL}`, options)
//   .then(response => response.json())
//   .then(console.log)

