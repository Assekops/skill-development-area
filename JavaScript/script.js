// var result = 50;
// if (result > 40) {
//   console.log("Congratulations! You passed your Exam.");
// } else {
//   console.log("Unfortunately, you did not pass the Exam.");
// }

// ----If Else if Statment-----
// var place = "first";
// if (place == "first") {
//   console.log("Gold");
// } else if (place == "second") {
//   console.log("Silver");
// } else if (place == "third") {
//   console.log("Bronze");
// } else {
//   console.log("No Medal");
// }

// -----Switch Statement ---
// var place = "fourth";
// switch (place) {
//   case "first":
//     console.log("Gold");
//     break;
//   case "second":
//     console.log("Silver");
//     break;
//   case "third":
//     console.log("Bronze");
//     break;
//   default:
//     console.log("No Medal");
// }

// ------converting if-else statment to switch statment ---------
// var light;
// if ((light = "green")) {
//   console.log("Drive");
// } else if ((light = "yellow")) {
//   console.log("Get Ready");
// } else if ((light = "red")) {
//   console.log("stop");
// } else {
//   console.log("No ligth");
// }

// var light = "yellow";
// switch (light) {
//   case "green":
//     console.log("Drive");
//     break;
//   case "yellow":
//     console.log("Get Ready");
//     break;
//   case "red":
//     console.log("Stop");
//     break;
//   default:
//     console.log("No light");
// }

// var age = 10;
// if (age >= 65) {
//   console.log("You get your income from your Pension");
// } else if (age < 65 && age >= 18) {
//   console.log("Each month you get a salary");
// } else if (age < 18) {
//   console.log("You get an allowance");
// } else {
//   console.log("The value of the age variable is not numerical");
// }

// var day = "Sunday";
// switch (day) {
//   case "Monday":
//     console.log("Read a book");
//     break;
//   case "Tuesday":
//     console.log("Watch a movie");
//     break;
//   case "Wednesday":
//     console.log("Read a book");
//     break;
//   case "Thursday":
//     console.log("Play basketball");
//     break;
//   case "Friday":
//     console.log("Socialize");
//     break;
//   case "Saturday":
//     console.log("Chill");
//     break;
//   case "Sunday":
//     console.log("Have barbeque");
//     break;
//   default:
//     //this block will run if no condition matches
//     console.log("There is no such day");
// }

// for (var i = 1; i <= 3; i++) {
//   console.log(i);
// }
// console.log("Go!");

// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Happy New Year!");

// ------
// var counter = 3;
// while (counter >= 0) {
//   console.log(counter);
//   counter--;
// }
// console.log("Negative number");

// ---Two weeks plan using nested loop

// for (var week = 1; week <= 2; week++) {
//   for (var day = 1; day <= 5; day++) {
//     console.log("Week: " + week + " Day: " + day);
//   }
// }

// for (var year = 2023; year < 2025; year++) {
//   console.log(year);
//   for (var month = 6; month < 9; month++) {
//     console.log("-------", month);
//   }
// }

// for (var i = 1; i <= 2; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log(i + " * " + j + "= " + i * j);
//   }
// }

// var cubes='ABCDEFG';
// for(var i=0; i<cubes.length; i++){
//   var styles ="font-size: 40px; border-radius:10px; border: 1px solid blue; background: pink; color: purple";
//   console.log("%c" + cubes[i], styles)
// }

// var awards = "12345678910";
// for (var i = 1; i < awards.length; i++) {
//   if (i == 1) {
//     console.log("Gold Medal");
//   } else if (i == 2) {
//     console.log("Silver Medal");
//   } else if (i == 3) {
//     console.log("Bronze Medal");
//   } else console.log(i);
// }

// for(var i=1; i<=10; i++){
//   switch(i){
//       case 1:
//       console.log("Gold Medal");
//       break;
//       case 2:
//       console.log("Silver Medal");
//       break;
//       case 3:
//       console.log("Bronze Medal");
//       break;
//       default:
//       console.log(i);
//   }
// }

// ------Function
// function addTwoNumbers(a, b) {
//   var c = a + b;
//   console.log("sum: ", c);
// }

// addTwoNumbers(10, 12);
// addTwoNumbers(5682, 12457);
// addTwoNumbers(258, 2);

// ---Function
// function letterFinder(word, match) {
//   for (var i = 0; i <= word.length; i++) {
//     if (word[i] == match) {
//       console.log("Found the", match, "at", i);
//     } else {
//       console.log("---No match found at", i);
//     }
//   }
// }

// letterFinder("test", "t");

// ---Object
// var table = {
//   legs: 4,
//   color: "brown",
//   priceUSD: 100,
// };

// console.log(table.legs);

// var house = {};
// house.rooms = 3;
// house.color = "Brown";
// house.priceUSD = "500,000";

// console.log(house);
// house.window = 10;
// console.log(house);
// house.window = 12;
// console.log(house);

// --
// var house2 = {};
// house2["rooms"] = 3;
// house2["color"] = "Brown";
// house2["priceUSD"] = 250000;

// console.log(house2);

// var car = {};
// car.color = "Red";
// car["color"] = "Silver";
// car["speed"] = 200;
// car.speed = 250;

// console.log(car);
// // --with bracket notation 'we can add space for property names'
// car["number of doors"] = 4;
// console.log(car);
// // ---with bracket notation we can give numbers as property name
// car["2022"] = 1991;
// console.log(car);
// ---with bracket notation we can evaluate expression
// var arrayOfKeys = ["speed", "altitude", "color"];
// var drone = {
//   speed: 100,
//   altitude: 200,
//   color: "red",
// };

// for (var i = 0; i < arrayOfKeys.length; i++) {
//   console.log(drone[arrayOfKeys[i]]);
// }

//-----Arrays-Push and pop
// var fruits = [];
// fruits.push("apple");
// fruits.push("mango");
// fruits.push("bannana");
// fruits.push("avocado");
// fruits.push("pineaple");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// -----

// function arrayBuilder(one, two, three) {
//   var arr = [];
//   arr.push(one);
//   arr.push(two);
//   arr.push(three);
//   return arr;
// }
// var simpleArray = arrayBuilder("apple", "mango", "orange");
// console.log(simpleArray);

// -----Math Objects
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN2);
// console.log(Math.floor(124.2568));
// console.log(Math.ceil(124.2568));
// console.log(Math.round(124.2568));
// console.log(Math.round(124.568));
// console.log(Math.trunc(15478.2568982));
// console.log(Math.pow(3, 2));
// console.log(Math.sqrt(49));

// var decimal = Math.random();
// console.log(decimal);
// Generate random number b/n 1 and 100
// console.log(Math.floor(decimal * 100));
// console.log(Math.ceil(decimal * 100));

// closer look at strings
// var letters = "abc";
// for (var i = 0; i < letters.length; i++) {
//   console.log(letters[i]);
// }

// var veggies = ['onion', 'parsely', 'carrot'];
// console.log(veggies.length);

// console.log(veggies[0]);

// var greeting = 'Hello';
// console.log(greeting.length);
// for (var i = 0; i < greeting.length; i++) {
//   console.log(greeting[i]);
// }

//String != Array
// var greeting = 'Hello ';
// var user = 'Lisa';

// console.log(greeting.pop()); //this gives an error greeting.pop is not a function

// console.log(greeting.concat(user));
// console.log(greeting + user);
// console.log(greeting.charAt(3));
// console.log('Hello '.concat('St.').concat('Paul'));
// console.log('123-456-789'.indexOf('-')); //returns the first position of the character
// console.log('123-456-789'.indexOf('5'));
// console.log('0123-456-7890'.indexOf('0'));

// console.log('123-456-789'.split('-'));
// console.log(greeting.toUpperCase());

//Exercise: Creating arrays and objects
// var clothes = [];
// clothes.push('Shirt', 'denim', 'v-neck', 'jacket', 'sneaker');
// console.log(clothes);
// clothes.pop();
// clothes.push('kaki');
// console.log(clothes[2]);
// var car = {};
// car.color = 'red';
// car.covertible = true;
// console.log(car);

// car.turnkey = function () {
//   console.log('Car engine is running');
// };
// car.lightOn = function () {
//   console.log('Light is on');
// };
// car.turnkey();
// car.lightOn();

//Type of operator uses to check the data type of
//console.log(typeof [1, 2, 3]);

//This is an example of BUG, the code continues to in an run unintended way
// function addNumbers(a, b) {
//   console.log(a + b);
// }
// addNumbers(14, 12);
// addNumbers(14, '12');
// console.log('still running');

//This is an example of REFERENCE ERROR c & d are not declared or assigned
// console.log(c + d);
// console.log('this code never runs');

//Error Handling

/*try {
  console.log(c + d);
} catch (err) {
  //do something
}
console.log('This line runs now');
*/

// try {
//   throw new Error();
// } catch (err) {
//   console.log(err);
// }
// console.log('This line runs now');

// try {
//   console.log(a + b);
// } catch (err) {
//   console.log('There was an error');
//   console.log('The error was saved in the error log');
// }
// console.log('My program does not stop');

// var letters = 'abc';
// letters.match(/d/);

// 'hello'.pop(); type error pop function is not allowed on string
// var firstName='James; ----syntad error string in not a a quotation

//var a 'hello';-----syntax error string not assigned

// console(c + d); --reference error c & d not defined

// range erro example
// function check(n) {
//   if (!(n >= -500 && n <= 500)) {
//     throw new RangeError(n + ' is not between -500 and 500');
//   }
// }
// try{
// check(2000);
// }catch(err){
//     if
// }

// Exercise: Error prevention

// function addTwoNumbers(a, b) {
//   try {
//     if (typeof a != 'number') {
//       throw new ReferenceError('The first argument is not a number');
//     } else if (typeof b != 'number') {
//       throw new ReferenceError('The second argument is not a number');
//     } else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log('Error ', err);
//   }
// }
// addTwoNumbers(5, 5); ---this line runs correctely giving 5+5=10
// addTwoNumbers('5', '5'); ---this line gives a reference error
// console.log('It is still running');---this line displayes because of the try catch error handling

// Exercise: Defensive programming
// function letterFinder(word, match) {
//     var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
//     var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
//     if(condition1 && condition2) { //if both condition matches
//         for(var i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 //check if the character at this i position in the word is equal to the match
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     } else {
//         //if the requirements don't match
//         console.log("Please pass correct arguments to the function")
//     }
// }
// letterFinder([],[])
// letterFinder("cat","c")

// var str = 'hello';
// str.match('jello');

// var bicycle = {
//     wheels: 2,
//     start: function() {

//     },
//     stop: function() {

//     }
// };

// week 3-Programming with JavaScript
//Functional Programming
// var shoes = 100;
// var stateTax = 1.1;
// function totalPrice(price, tax) {
//   return price * tax;
// }
// var toPay = totalPrice(shoes, stateTax);
// console.log(toPay);

//Currency convertion
// var currencyOne = 100;
// var currencyTwo = 0;
// var exchangeRate = 1.2;

// function convertcurrency(amount, rate) {
//   return amount * rate;
// }
// currencyTwo = convertcurrency(currencyOne, exchangeRate);
// console.log(currencyTwo);

console.log();

// function consoleLog(val) {
//   console.log(val);
//   return val;
// }

// consoleLog('hello');

//Recursion
// let counter = 3;
// function example() {
//   console.log(counter);
//   counter = counter - 1;
//   if (counter === 0) return;
//   example();
// }

// example();

//Funvtional Programming (FP) Vs Object-Oriented Programming(OOP)
//FP
// function getDistance(mph, h) {
//   return mph * h;
// }
// var mph = 60;
// var h = 2;
// var distance = getDistance(mph, h);

// console.log(distance);

//OOP
// var virtualPet = {
//   sleepy: true,
//   nap: function () {
//     this.sleepy = false;
//   },
// };
// console.log(virtualPet.sleepy);
// virtualPet.nap();
// console.log(virtualPet.sleepy);

//Functional Programming concepts-
// function addTwoNums(a, b) {
//   console.log(a + b);
// }
// function randomNum() {
//   return Math.floor(Math.random() * 10 + 1);
// }
// function specificNum() {
//   return 42;
// }
// var useRandom = true;
// var getNumber;
// if (useRandom) {
//   getNumber = randomNum;
// } else {
//   getNumber = specificNum;
// }

// console.log(randomNum());
// addTwoNums(getNumber(), getNumber());

//***********Programming Assignment: Building a functional program*********************
// Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//   var message = '%c' + txt;
//   var style = `color: ${color};`;
//   style += `background: ${background};`;
//   style += `font-size: ${fontSize};`;
//   console.log(message, style);
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//   var fontStyle = 'color: tomato; font-size: 50px';
//   if (reason == 'birthday') {
//     console.log(`%cHappy birthday`, fontStyle);
//   } else if (reason == 'champions') {
//     console.log(`%cCongrats on the title!`, fontStyle);
//   } else {
//     console.log(message, style);
//   }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');

// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//   consoleStyler(color, background, fontSize, txt);
//   celebrateStyler(reason);
// }
// // Call styleAndCelebrate
// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
// //***********Programming Assignment: Building a functional program*********************

//Object Oriented Programing
// var purchase1 = {
//   shoes: 100,
//   stateTax: 1.2,
//   totalPrice: function () {
//     var calculation = this.shoes * this.stateTax;
//     console.log('Total Price: ', calculation);
//   },
// };

// purchase1.totalPrice();

// var purchase2 = {
//   shoes: 50,
//   stateTax: 1.2,
//   totalPrice: function () {
//     var calculation = this.shoes * this.stateTax;
//     console.log('Total Price: ', calculation);
//   },
// };

// purchase2.totalPrice();

// //Classes
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   area() {
//     console.log('The area of a rectangke is: ', this.height * this.width);
//   }
// }
// Rectangle.area();

// const door = {
//   bell: function () {
//     return 'Ring, ring ! Come here! Please!';
//   },
// };
// door.bell();

// const bicycle = {
//   bell: function () {
//     return 'Ring, ring ! wWtch out! Please';
//   },
// };
// bicycle.bell();

// //concat() method polymorphism example
// 'abc'.concat('def'); //'abcdef'----string concatination
// ['abc'].concat(['def']); // ['abc', 'def']
// //
// class Bird {
//   useWings() {
//     console.log('Flying');
//   }
// }
// class Eagle extends Bird {
//   useWings() {
//     super.useWings();
//     console.log('Barely, Flapping');
//   }
// }
// class penguin extends Bird {
//   useWings() {
//     console.log('Diving');
//   }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new penguin();

// baldEagle.useWings();
// kingPenguin.useWings();

// var currentDateTime = new Date();
// console.log(currentDateTime);

//Constructor
// var Bird = {
//   hasWings: true,
//   canFly: true,
//   hasFeathers: true,
// };

// var eagle1 = Object.create(Bird);
// console.log('eagle1: ', eagle1);

// console.log('eagle1 has wings?:', eagle1.hasWings);
// console.log('eagle1 can fly?:', eagle1.canFly);
// console.log('eagle1 has feathers?:', eagle1.hasFeathers);

// var penguin1 = Object.create(Bird);
// penguin1.canFly = false;
// console.log('penguin1 can fly?:', penguin1.canFly);

//creating classes

/********syntax
class Clasname { 
  constructor(){

  }
}
//the first later of Classname should be capital letter
//constructor will be used to build properties on the future instance of Classname
*/

/*--------------------creating classes-----------------------
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log('Lights are 100% operational.');
  }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
//--------------------creating classes-----------------------*/

/*//-------------
class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
    this.treadmill = new Treadmill(treadmillPos, 5);
  }
}

var boxingGym = new Gym('7-22', 'right corner', 'left corner');

console.log(boxingGym.openHrs); //
console.log(boxingGym.stationaryBike); //
console.log(boxingGym.treadmill); //
//---------------*/

//Default parameters
// class WithDefaultParams {
//   constructor(num1 = 1, num2 = 2, num3 = 3, string1 = 'Result:', bool1 = true) {
//     this.num1 = num1;
//     this.num2 = num2;
//     this.num3 = num3;
//     this.string1 = string1;
//     this.bool1 = bool1;
//   }
//   calculate() {
//     if (this.bool1) {
//       console.log(this.string1, this.num1 + this.num2 + this.num3);
//       return;
//     }
//     return 'The value of bool1 is incorrect';
//   }
// }
// var better = new WithDefaultParams();
// better.calculate(); // Result: 6

//Designing OO Program
// design the following inheritance hierarchy
//              Animal
//              /    \
//            Cat     Bird
//           /   \      \
//   House cat  Tiger   Parrot

/*
1. The Animal class' constructor will have two properties: color and energy 

2. The Animal class' prototype will have three methods: isActive(), sleep(), and getColor(). 

3. The isActive() method, whenever ran, will lower the value of energy until it hits 0. 
The isActive() method will also report the updated value of energy. If energy is at zero, 
the animal object will immediately go to sleep, by invoking the sleep() method based on the said 
condition. 

4. The getColor() method will just console log the value in the color property. 

5. The Cat class will inherit from Animal, with the additional sound, canJumpHigh, 
and canClimbTrees properties specific to the Cat class. It will also have its own 
makeSound() method. 

6. The Bird class will also inherit from Animal, but is own specific properties will be 
quite different from Cat. Namely, the Bird class will have the sound and the canFly properties, 
and the makeSound method too. 

7. The HouseCat class will extend the Cat class, and it will have its own houseCatSound as its 
special property. Additionally, it will override the makeSound() method from the Cat class, 
but it will do so in an interesting way. If the makeSound() method, on invocation, receives a 
single option argument - set to true, then it will run super.makeSound() - in other words, 
run the code from the parent class (Cat) with the addition of running the 
console.log(this.houseCatSound). Effectively, this means that the makeSound() method on the 
HouseCat class' instance object will have two separate behaviors, based on whether we pass it 
true or false. 

8. The Tiger class will also inherit from Cat, and it will come with its own tigerSound property,
 while the rest of the behavior will be pretty much the same as in the HouseCat class. 

9. Finally, the Parrot class will extend the Bird class, with its own canTalk property, 
and its own makeSound() method, working with two conditionals: one that checks if the value of true
 was passed to makeSound during invocation, and another that checks the value stored 
 inside this.canTalk property.  
*/
/*
class Animal {
  constructor(color = 'yellow', energy = 100) {
      this.color = color;
      this.energy = energy;
  }
  isActive() {
      if(this.energy > 0) {
          this.energy -= 20;
          console.log('Energy is decreasing, currently at:', this.energy)
      } else if(this.energy == 0){
          this.sleep();
      }
  }
  sleep() {
      this.energy += 20;
      console.log('Energy is increasing, currently at:', this.energy)
  }
  getColor() {
      console.log(this.color)
  }
}

class Cat extends Animal {
  constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
      super(color, energy);
      this.sound = sound;
      this.canClimbTrees = canClimbTrees;
      this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
      console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
      super(color, energy);
      this.sound = sound;
      this.canFly = canFly;
  }
  makeSound() {
      console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
      super(sound,canJumpHigh,canClimbTrees, color,energy);
      this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
      super(sound,canJumpHigh,canClimbTrees, color,energy);
      this.tigerSound = tigerSound;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound,canFly, color,energy) {
      super(sound,canFly, color,energy);
      this.canTalk = canTalk;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      if (this.canTalk) {
          console.log("I'm a talking parrot!");
      }
  }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
*/

// class Aminal {
//   constructor(color, energy) {
//     this.color = color;
//     this.energy = energy;
//   }
//   isActive() {
//     if (this.energy > 0) {
//       this.energy -= 20;
//       console.log('Energy is decreasing, currently at:', this.energy);
//     } else if (this.energy == 0) {
//       this.sleep();
//     }
//   }
//   sleep() {}
//   getColor() {
//     console.log('The color of aminal is:', this.color);
//   }
// }

// class Cat extends Animal {
//   constructor(sound, canJumpHigh, canClimbTrees,color, energy) {
//     super(color, energy);
//     this.sound = sound;
//     this.canJumpHigh = canJumpHigh;
//     this.canClimbTrees = canClimbTrees;
//   }
//   makeSound() {}
// }

// class Bird extends Animal {
//   constructor(sound, canFly, color, energy) {
//     super(color, energy);
//     this.sound = sound;
//     this.canFly = canFly;
//   }
//   makeSound() {}
// }

// class HouseCat extends Cat {
//   constructor(houseCatSound, sound, canFly, color, energy) {
//     this.houseCatSound = houseCatSound;
//   }
// }

// class Tiger extends Cat {
//   constructor() {}
// }

// class Parrot extends Bird {
//   constructor() {}
// }

//-----------------Programming Assignment: Building an object-oriented program------------------
/*Task 1: Code a Person class
Code a Person class, with three parameters in the constructor: name, age, and energy.

Set the default parameters in the Person class as follows:

name = "Tom"

age = 20

energy = 100
Code two methods in the Person class. Name those methods sleep() and doSomethingFun().

The sleep() method should take the existing energy level and increase it by 10.

The doSomethingFun() method should take the existing energy level and decrease it by 10.


Task 2: Code a Worker class
Code a sub-class, inheriting from the Person class, and name it Worker.

The Worker class has two additional parameters in the constructor:

xp (for "experience points")
hourlyWage.
These properties are set to the following default values:

xp = 0

hourlyWage = 10
The Worker class has all the paramerters and methods of its super-class.

Additionally, it has the goToWork() method, which, whenever it's run, increases the value of the xp property by 10.


Task 3: Code a intern object
Inside the intern function instantiate the Worker class to code a new intern object.

The intern should have the following characteristics:

name: Bob

age: 21

energy: 110

xp: 0

hourlyWage: 10
Run the goToWork() method on the intern object. Then return the intern object.




Task 4: Code a manager object
Inside the manager function instantiate the Worker class to code a new manager object.

The manager object should have the following characteristics:

name: Alice

age: 30

energy: 120

xp: 100

hourlyWage: 30
Run the doSomethingFun() method on the manager object. Then return the manager object.




Nice work! */
//-----------------Programming Assignment: Building an object-oriented program------------------

//-------Solution----------Programming Assignment: Building an object-oriented program----------
// Task 1: Code a Person class
// Task 1: Code a Person class
// class Person {
//   constructor(name = 'Tom', age = 20, energy = 100) {
//     this.name = name;
//     this.age = age;
//     this.energy = energy;
//   }
//   sleep() {
//     this.energy += 10;
//   }
//   doSomethingFun() {
//     this.energy -= 10;
//   }
// }
// // Task 2: Code a Worker class
// class Worker extends Person {
//   constructor(xp = 0, hourlyWage = 10, name, age, energy) {
//     super(name, age, energy);
//     this.xp = xp;
//     this.hourlyWage = hourlyWage;
//   }
//   goToWork() {
//     this.xp += 10;
//   }
// }
// // Task 3: Code an intern object, run methods
// function intern() {
//   var intern = new Worker();
//   intern.name = 'Bob';
//   intern.age = 21;
//   intern.energy = 110;
//   intern.xp = 0;
//   intern.hourlyWage = 10;
//   intern.goToWork();
//   return intern;
// }

// // Task 4: Code a manager object, methods
// function manager() {
//   var manager = new Worker();
//   manager.name = 'Alive';
//   manager.age = 30;
//   manager.energy = 120;
//   manager.ex = 100;
//   manager.hourlyWage = 30;
//   manager.doSomethingFun();
//   return manager;
// }
// console.log(intern());
// console.log(manager());
//-------Solution----------Programming Assignment: Building an object-oriented program----------

//-------------------
// class Animal {
//   constructor(lg) {
//     this.legs = lg;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super(4);
//   }
// }

// var result = new Dog();
// console.log(result.legs);

//-----------

//-----------
// class Animal {}

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = 'meow';
//   }
// }

// var result = new Animal();
// console.log(result.noise);
//----------

//----------

// class Person {
//   sayHello() {
//     console.log('Hello');
//   }
// }

// class Friend extends Person {
//   sayHello() {
//     console.log('Hey');
//   }
// }

// var result = new Friend();
// result.sayHello();
// //----------

//for of
// const car = {
//   speed: 100,
//   color: 'blue',
// };
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));
// for (prop of car) {
//   console.log(prop);
// }

// const colors = ['green', 'yellow', 'red'];
// for (prop of colors) {
//   console.log(prop);
// }

//--------
// var clothingItem = {
//   price: 50,
//   color: 'blue',
//   material: 'cotton',
//   season: 'autumn',
// };

// for (const key of Object.keys(clothingItem)) {
//   console.log(key, ':', clothingItem[key]);//by using clothingItem[key] we can access an object's member using the brackets notation.
// }

// function testBracketsDynamicAccess() {
//   var dynamicKey;
//   let x = Math.random();
//   if (x > 0.5) {
//     dynamicKey = 'speed';
//   } else {
//     dynamicKey = 'color';
//   }

//   var dron = {
//     speed: 15,
//     color: 'orange',
//   };

//   console.log(x);
//   console.log(dron[dynamicKey]);
// }

// testBracketsDynamicAccess();

//for of example
// const car = {
//   engine: true,
//   steering: true,
//   speed: 'slow',
// };

// const sportsCar = Object.create(car);
// sportsCar.speed = 'fast';
// // console.log('The sports car object:', sportsCar);

// // console.log('for in loop is un-reliable');
// for (prop in sportsCar) {
//   console.log(prop);
// }
// console.log('🤔', 'Iterating over objects and its prototyp');

// for (prop of Object.keys(sportsCar)) {
//   console.log(prop + ':' + sportsCar[prop]);
// }

//Template literals

// let multiLine = `
//   Using ES6
//   backticks
//   multi-line
//   strings are
//   possible
// `;
// console.log(multiLine);

// let first = 'The first statment';
// let second = 'The second statment';

// console.log(`${first} then ${second}`);

// var dairy = [
//   'cheese',
//   'sour cream',
//   'milk',
//   'yogurt',
//   'ice cream',
//   'milkshake',
// ];
// function logDairy() {
//   for (prop of dairy) {
//     console.log(`${logDairy()}`);
//   }
// }

// logDairy();
//-------------Task 1- Quetion
/*You are given an array of dairy products:  

    
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    


Create a function called `logDairy`. Within it, console log each of the items in the dairy array, using the for...of loop.   

After you create this function, call it as `logDairy()` to see the output on the console.

The expected output should be:

```
cheese
sour cream
milk
yogurt
ice cream
milkshake */
//-------------Task 1- Quetion
//-------------Task 1- Solution
// var dairy = [
//   'cheese',
//   'sour cream',
//   'milk',
//   'yogurt',
//   'ice cream',
//   'milkshake',
// ];
// function logDairy() {
//   for (item of dairy) {
//     console.log(item);
//   }
// }
// logDairy();

//-------------Task 1- Solution
//-------------Task 2- Question
/*Create a function called `birdCan`, within it, loop over the bird object's properties and console log each one, using the for...of loop. Finally call the function as `birdCan()` to see the output on the console.
Remember, you need to console log both the key and the value of each of the bird object's properties.

<br/>
Expected output should be:

```
canFly: true
hasFeathers: true*/
//-------------Task 2- Question

//-------------Task 2- Solution
// const animal = {
//   canJump: true,
// };

// const bird = Object.create(animal);

// bird.canFly = true;

// bird.hasFeathers = true;

// function birdCan() {
//   for (prop of Object.keys(bird)) {
//     console.log(prop + ': ' + bird[prop]);
//   }
// }
// birdCan();
//-------------Task 2- Solution

//-------------Task 3- Question
/* Using the same starter code as in task 2, create a function called 
`animalCan` and within it, loop over all the properties in both the bird 
object and its prototype - the animal object - using the for...in loop. 
Finally call the function as `animalCan()` to see the output on the console.*/
//-------------Task 3- Question

//-------------Task 3- Solution
// function animalCan() {
//   for (prop in bird) {
//     console.log(prop + ': ' + bird[prop]);
//   }
// }
// animalCan();
// console.log('');

//-------------Task 3- Solution

///DSA practice
//STACK- LIFO- Lat In First Out
//functions:
//push, pop, peek, length
//Palendrome- a word in reverse order gives the same meaning.
// var letters = [];//this is our stack

// var word = 'racecar';

//average
// let grade = [75, 85, 95, 100, 78];
// let gradeSum = 0;
// for (let i = 0; i < grade.length; i++) {
//   gradeSum += grade[i];
// }
// console.log(gradeSum / grade.length);

//forEach
//filter
//map
// const fruits = ['kiwi', 'mango', 'apple', 'pear'];
// function appendIndex(fruits, index) {
//   console.log(`${index}.${fruits}`);
// }
// fruits.forEach(appendIndex);

// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach(function (veggies, s) {
//   console.log(`${s}.${veggies}`);
// });
// //forEach using arrow function
// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach((veggies, index) => {
//   console.log(`${index}.${veggies}`);
// });

//filter
// const nums = [12, 34, 45, 32, 19, 68, 3];
// nums.filter(function (nums) {
//   return nums > 20;
// });

//map method
// var num = [0, 10, 20, 30, 40, 50];
// var mappedNum = num.map(function (num) {
//   return num / 10;
// });
// console.log(mappedNum);

//convert object to array
// const result = [];
// const drone = {
//   speed: 100,
//   color: 'yellow',
// };
// const dronKeys = Object.keys(drone);
// dronKeys.forEach(function (key) {
//   result.push(key, drone[key]);
// });
// console.log(result);

//working with Maps in JS

// let bestBoxers = new Map();
// bestBoxers.set(1, 'Champion');
// bestBoxers.set(2, 'Runner up');
// bestBoxers.set(3, 'Third place');

// console.log(bestBoxers);
// console.log(bestBoxers.get(1));

//working with Set
// const repetitiveFruits = [
//   'apple',
//   'pear',
//   'apple',
//   'pear',
//   'plum',
//   'mango',
//   'apple',
// ];
// const uniqueFruit = new Set(repetitiveFruits);
// console.log(uniqueFruit);
// function count(...basket) {
//   console.log(basket.length);
// }

// count(10, 9, 8, 7, 6);

// DOM Manipulation

// querySelector() method returns the first element in the document that matches the selector
//querySelectorAll() method returns all elements in the document that match the selector.
//getElementById() method returns a specific element whose id matches the selector.
//getElementsByClassName() method returns all elements in the document that has the class specified in the selector.
//it is important to note that the word element is singular for ID and plural for class name.
// suppose the element you're looking for cannot be found in that case you will be returned null for IDs. An empty collection represented by square brackets for class names.

//Web Page content Update
// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     h1.innerText = input.value
// })

// function handleClicks() {
//   switch (h1.innerText) {
//     case arr[0]:
//       h1.innerText = arr[1];
//       break;
//     case arr[1]:
//       h1.innerText = arr[2];
//       break;
//     case arr[2]:
//       h1.innerText = arr[3];
//       break;
//     default:
//       arr[0] = h1.innerText;
//   }
// }

//palendrom
// var letters = [];
// var word = 'A man, a plan, a canal, Panama';
// var reverseWord = '';

// //put letters of the word into stack
// for (i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// //pop off the stack in reverse order
// for (var i = 0; i < word.length; i++) {
//   reverseWord += letters.pop();
// }

// if (reverseWord === word) {
//   console.log(`${word} is Palendrome`);
// } else {
//   console.log(`${word} is not a Palendrome`);
// }

function reverseArray(arr) {
  var length = arr.length;
  var middle = Math.floor(length / 2);
  for (let i = 0; i < middle; i++) {
    var temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
//reverseArray = reverseArray(arr);
console.log(reverseArray(arr));
//Leet