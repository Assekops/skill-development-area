// // /**
// //  * @param {string} s
// //  * @return {boolean}
// //  */
// // var isValid = function(s) {
// //     let stack = []; // create an empty stack to store opening brackets
// //     for (let c of s) { // loop through each character in the string
// //         if (c === '(' || c === '{' || c === '[') { // if the character is an opening bracket
// //             stack.push(c); // push it onto the stack
// //         } else { // if the character is a closing bracket
// //             if (!stack.length || // if the stack is empty or
// //                 (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
// //                 (c === '}' && stack[stack.length - 1] !== '{') ||
// //                 (c === ']' && stack[stack.length - 1] !== '[')) {
// //                 return false; // the string is not valid, so return false
// //             }
// //             stack.pop(); // otherwise, pop the opening bracket from the stack
// //         }
// //     }
// //     return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
// //                           // so the string is valid, otherwise, there are unmatched opening brackets, so return false
// // };

// // function isValid(s) {
// //   const stack = [];
// //   const brackets = {
// //     '(': ')',
// //     '{': '}',
// //     '[': ']',
// //   };

// //   for (let char of s) {
// //     if (char in brackets) {
// //       stack.push(char);
// //     } else {
// //       const top = stack.pop();
// //       if (brackets[top] !== char) {
// //         return false;
// //       }
// //     }
// //   }

// //   return stack.length === 0;
// // }

// // // Example usage:
// // console.log(isValid('()')); // Output: true
// // console.log(isValid('()[]{}')); // Output: true
// // console.log(isValid('(]')); // Output: false

// //Buy Two Checolates
// /*You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.

// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

// Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without ending up in debt, return money. Note that the leftover must be non-negative.

// Example 1:

// Input: prices = [1,2,2], money = 3
// Output: 0
// Explanation: Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus, we return 0.
// Example 2:

// Input: prices = [3,2,3], money = 3
// Output: 3
// Explanation: You cannot buy 2 chocolates without going in debt, so we return 3.

// Constraints:

// 2 <= prices.length <= 50
// 1 <= prices[i] <= 100
// 1 <= money <= 100 */
// // var buyChoco = function (prices, money) {
// //   let minLeftover = money;

// //   for (let i = 0; i < prices.length - 1; i++) {
// //     for (let j = i + 1; j < prices.length; j++) {
// //       const totalCost = prices[i] + prices[j];
// //       const leftover = money - totalCost;

// //       if (leftover >= 0 && leftover < minLeftover) {
// //         minLeftover = leftover;
// //       }
// //     }
// //   }

// //   return minLeftover;
// // };

// // console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62));

// // function minAmountLeft(prices, money) {
// //   let minLeftover = money;

// //   for (let i = 0; i < prices.length - 1; i++) {
// //     for (let j = i + 1; j < prices.length; j++) {
// //       const totalCost = prices[i] + prices[j];
// //       const leftover = money - totalCost;

// //       if (leftover >= 0 && leftover < minLeftover) {
// //         minLeftover = leftover;
// //       }
// //     }
// //   }

// //   return minLeftover;
// // }

// // // Example usage:
// // console.log(minAmountLeft([1, 2, 2], 3)); // Output: 0
// // console.log(minAmountLeft([3, 2, 3], 3)); // Output: 3

// // var buyChoco = function (prices, money) {
// //   let ans = Infinity;
// //   let fin;

// //   for (let i = 0; i < prices.length; ++i) {
// //     for (let j = 0; j < prices.length; ++j) {
// //       if (i !== j) {
// //         const sum = prices[i] + prices[j];
// //         ans = Math.min(ans, sum);
// //       }
// //     }
// //   }

// //   fin = money - ans;
// //   if (fin >= 0) {
// //     return fin;
// //   } else {
// //     return money;
// //   }
// // };
// // console.log(buyChoco([1, 2, 2], 3));

// // function isValidPassword(password) {
// //   // for checking if password length is between 8 and 15
// //   if (!(password.length >= 8 && password.length <= 15)) {
// //     return false;
// //   }

// //   // to check space
// //   if (password.indexOf(' ') !== -1) {
// //     return false;
// //   }

// //   // for digits from 0 to 9
// //   let count = 0;
// //   for (let i = 0; i <= 9; i++) {
// //     if (password.indexOf(i) !== -1) {
// //       count = 1;
// //     }
// //   }
// //   if (count === 0) {
// //     return false;
// //   }

// //   // for special characters
// //   if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
// //     return false;
// //   }

// //   // for capital letters
// //   count = 0;
// //   for (let i = 65; i <= 90; i++) {
// //     if (password.indexOf(String.fromCharCode(i)) !== -1) {
// //       count = 1;
// //     }
// //   }
// //   if (count === 0) {
// //     return false;
// //   }

// //   // for small letters
// //   count = 0;
// //   for (let i = 97; i <= 122; i++) {
// //     if (password.indexOf(String.fromCharCode(i)) !== -1) {
// //       count = 1;
// //     }
// //   }
// //   if (count === 0) {
// //     return false;
// //   }

// //   // if all conditions fail
// //   return true;
// // }

// // // example usage
// // const password1 = 'GeeksForGeeks';
// // if (isValidPassword(password1)) {
// //   console.log(`${password1} - Valid Password`);
// // } else {
// //   console.log(`${password1} - Invalid Password!`);
// // }

// // const password2 = 'G00dP@55w0rd';
// // if (isValidPassword(password2)) {
// //   console.log(`${password2} - Valid Password`);
// // } else {
// //   console.log(`${password2} - Invalid Password!`);
// // }

// ////change array to object
// // function arrayToObject(arr) {
// //   arr = arr.flat();
// //   let obj = {};
// //   for (let i = 0; i < arr.length; i++) {
// //     if (i % 2 == 0) {
// //       let key = arr[i];
// //       let value = arr[i + 1];

// //       obj[key] = value;
// //     }
// //   }
// //   return obj;
// // }

// // let arr = ['max', 19];
// // console.log(arrayToObject(arr));

// //------------------
// /*Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

// Example 1:

// Input: fn = (x) => x * 5, args = [2], t = 20
// Output: [{"time": 20, "returned": 10}]
// Explanation:
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
// Example 2:

// Input: fn = (x) => x**2, args = [2], t = 100
// Output: []
// Explanation:
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x**2, [2], 100);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
// Example 3:

// Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
// Output: [{"time": 30, "returned": 8}]
// Explanation:
// const cancelTimeMs = 100;
// const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.

// Constraints:

// fn is a function
// args is a valid JSON array
// 1 <= args.length <= 10
// 20 <= t <= 1000
// 10 <= cancelTimeMs <= 1000*/

// /**
//  * @param {Function} fn
//  * @param {Array} args
//  * @param {number} t
//  * @return {Function}
//  */
// function cancellable(fn, args, t) {
//   let isCancelled = false;

//   const delayFn = setTimeout(() => {
//     if (!isCancelled) {
//       const result = fn(...args);
//       console.log([{ time: t, returned: result }]);
//     }
//   }, t);

//   const cancelFn = () => {
//     isCancelled = true;
//     clearTimeout(delayFn);
//     console.log([]);
//   };

//   return cancelFn;
// }

// // Example usage:

// const fn1 = (x) => x * 5;
// const args1 = [2];
// const t1 = 20;
// const cancelTimeMs1 = 50;
// const cancelFn1 = cancellable(fn1, args1, t1);
// setTimeout(cancelFn1, cancelTimeMs1);

// const fn2 = (x) => x ** 2;
// const args2 = [2];
// const t2 = 100;
// const cancelTimeMs2 = 50;
// const cancelFn2 = cancellable(fn2, args2, t2);
// setTimeout(cancelFn2, cancelTimeMs2);

// const fn3 = (x1, x2) => x1 * x2;
// const args3 = [2, 4];
// const t3 = 30;
// const cancelTimeMs3 = 100;
// const cancelFn3 = cancellable(fn3, args3, t3);
// setTimeout(cancelFn3, cancelTimeMs3);

//Leetcode 2690 Infinite Method Object
//Write a method that returns Infinite method object
const createInfiniteObject = () =>
  new Proxy({}, { get: (_, prop) => () => prop });
