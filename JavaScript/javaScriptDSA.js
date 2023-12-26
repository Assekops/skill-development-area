//Stack
// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.items.length === 0) {
//       return 'Underflow';
//     }
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// // Example usage:
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.peek()); // Output: 20
// console.log(stack.pop()); // Output: 20
// console.log(stack.size()); // Output: 1

// //Queue
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     if (this.items.length === 0) {
//       return 'Underflow';
//     }
//     return this.items.shift();
//   }

//   front() {
//     return this.items[0];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// // Example usage:
// const queue = new Queue();
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.front()); // Output: 30
// console.log(queue.dequeue()); // Output: 30
// console.log(queue.size()); // Output: 1

// //Binary Search Algorithm
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);

//       if (arr[mid] === target) {
//         return mid; // Element found
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Search in the right half
//       } else {
//         right = mid - 1; // Search in the left half
//       }
//     }

//     return -1; // Element not found
//   }

//   // Example usage:
//   const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   console.log(binarySearch(sortedArray, 5)); // Output: 4 (index of 5)
