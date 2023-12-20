/*1. Question 1

Candidate X has an interview today for which he has to reach the venue at a specific time. Early in the morning, X sets his watch to the correct time, so that he can reach the venue on time. But unknown to X, the watch is a faulty one and it gains a few seconds every 5 minutes. However, X follows the time shown on this watch and reaches the location at the time that he thinks is correct. At the reception, he is told that he is early by certain minutes.

Write a program to find the time when X reaches the interview venue, where the inputs to the program would be:

1. The time at which the watch was set correctly in the morning,

2. The number of seconds gained by the watch every 5 minutes

3. By how many minutes X reached early.

Maps

For example, consider that the faulty watch gains 5 seconds every 5 minutes. That is, when a correct watch moves ahead by 5 minutes, the faulty watch moves ahead by 5 minutes and 5 seconds. Suppose the watch was set correctly at 0600 (6:00 am). At the venue, X is told that he is 10 minutes early.

The input for this would be given as such:

0600

5

10

The first line is the time in 24 hours format, when the watch was set correctly. The second line denotes the number of seconds gained by the watch every 5 minutes. The third line shows the number of minutes X reached early, when he followed this faulty watch.

The output for the correct time for the interview would be 1600.

Maps

Explanation: For this example, the faulty wat gains 5 seconds every 5 minutes. That is, it ga 1 minute over the actual time for every 60 minutes that passes (5 seconds gained in 5 minutes => 60 seconds gained in 60 minutes, 1 minute is gained over every 60 minutes). For to reach 10 minutes early, the faulty watch she gain 10 minutes over the actual time. Thus, it takes 60x10 = 600 minutes = 10 hours for the faulty watch to gain 10 minutes over the actua time. 10 hours from when the watch was set correctly is 4:00 PM, or 1600 in 24 hour format Hence the output would be 1600

Function Description

Complete the function interviewTime in the editor below. The function must print the time when X reaches the interview venue. Print Inval input if any constraints are violated.

interviewTime has the following parameter(s):

timeSetAt: The time at which the watch was s correctly. The time would be in 24 hours format

secondsGainedEveryFive Minutes: The numbe of seconds gained by the faulty watch every 5 minutes                               minutesEarly: The number of minutes by which the candidate reached early

Constraints

• All time should be in 24 hour format without any special character in between. For instance, for 4:00 PM, 1600 is allowed, but 16:00 is not

• The minutes gained should be a positive integer

▼ Input Format For Custom Testing

The input contains a sequence of parameters, one in each line:

The first line contains a string which shows when the watch was set correctly, in 24 hours format.

The second line contains an integer, denoting the number of seconds gained by the watch every 5 minutes.

The third line contains an integer that shows the number of minutes by which the candidate reached early

▼ Sample Case 0

Sample Input For Custom Testing

5

0600

10                           Sample Input For Custom Testing

0600

5

10

Sample Output

1600

Explanation

The faulty watch gains 5 seconds every 5 minutes. 
That is, it gains 1 minute over the actual time for every 60 minutes that passes. 
For X to reach 10 minutes early, the faulty watch should gain 10 minutes over the actual time. 
Thus, it takes 60x10 = 600 minutes = 10 hours for the faulty watch to gain 10 minutes over the actual time. 
10 hours from when the watch was set correctly is 4:00 PM, or 1600 in 24 hour format.

▼ Sample Case 1

Sample Input For Custom Testing

600

5

10

Sample Output

Invalid input

Explanation

The first part of the input shows 600 which is not a valid 24 hours time the correct time should have beem 0600


This the exam question given on 27th nov 2023
*/
//--------------------------Solution---------------
// function interviewTime(timeSetAt, secondsGainedEveryFiveMinutes, minutesEarly) {
//   // Check if the input timeSetAt is in the correct 24-hour format
//   if (!/^[0-2][0-9][0-5][0-9]$/.test(timeSetAt)) {
//     console.log('Invalid input');
//     return;
//   }

//   // Convert input values to integers
//   secondsGainedEveryFiveMinutes = parseInt(secondsGainedEveryFiveMinutes);
//   minutesEarly = parseInt(minutesEarly);

//   // Extract hours and minutes from the input time
//   const hours = parseInt(timeSetAt.substring(0, 2));
//   const minutes = parseInt(timeSetAt.substring(2));

//   // Calculate the total minutes gained by the faulty watch
//   const totalMinutesGained = Math.floor(
//     (secondsGainedEveryFiveMinutes * minutesEarly) / 60
//   );

//   // Calculate the final time when X reaches the interview venue
//   const finalHours = (hours + Math.floor(totalMinutesGained / 60)) % 24;
//   const finalMinutes = (minutes + (totalMinutesGained % 60)) % 60;

//   // Print the final time in the required format
//   console.log(
//     `${finalHours.toString().padStart(2, '0')}${finalMinutes
//       .toString()
//       .padStart(2, '0')}`
//   );
// }

// // Sample Input
// interviewTime('0600', 5, 10);
//--------------------------Solution---------------

//--------------------------Question---------------
/*
You have two strings of lowercase English letters. You can perform two types of operations on the first string:


Append a lowercase English letter to the end of the string.
Delete the last character of the string. Performing this operation on an empty string results in an 
empty string.
Given an integer, , and two strings,  and , determine whether or not you can convert  to  by performing exactly 
 of the above operations on . If it's possible, print Yes. Otherwise, print No.

Example. 


To convert  to , we first delete all of the characters in  moves. Next we add each of the characters of  in order.
 On the  move, you will have the matching string. Return Yes.

If there were more moves available, they could have been eliminated by performing multiple deletions on an empty string.
 If there were fewer than  moves, we would not have succeeded in creating the new string.

Function Description

Complete the appendAndDelete function in the editor below. It should return a string, either Yes or No.

appendAndDelete has the following parameter(s):

string s: the initial string
string t: the desired string
int k: the exact number of operations that must be performed
Returns

string: either Yes or No
Input Format

The first line contains a string , the initial string.
The second line contains a string , the desired final string.
The third line contains an integer , the number of operations.

Constraints

 and  consist of lowercase English letters, .
Sample Input 0

hackerhappy
hackerrank
9
Sample Output 0

Yes
Explanation 0

We perform  delete operations to reduce string  to hacker. Next, we perform  append operations (i.e., r, a, n, and k), 
to get hackerrank. Because we were able to convert  to  by performing exactly  operations, we return Yes.

Sample Input 1

aba
aba
7
Sample Output 1

Yes
Explanation 1

We perform  delete operations to reduce string  to the empty string. 
Recall that though the string will be empty after  deletions, we can still perform a 
delete operation on an empty string to get the empty string. Next, we perform  append operations (i.e., a, b, and a). 
Because we were able to convert  to  by performing exactly  operations, we return Yes.

Sample Input 2

ashley
ash
2
Sample Output 2

No
Explanation 2

To convert ashley to ash a minimum of  steps are needed. Hence we print No as answer.*/
//--------------------------Question---------------
// let firstString = s;
// let desiredString = t;
// let numberOperation = k;

// let count = 0;
// let result = '';

// for (let i in firstString) {
//   if (firstString.length + desiredString.length <= numberOperation) {
//     return 'Yes';
//   }

//   if (firstString[i] === desiredString[i]) {
//     count++;
//   } else {
//     break;
//   }
// }

// let check =
//   firstString.length - count + (desiredString.length - count) - numberOperation;

// let check2 = firstString.length - count + (desiredString.length - count);

// result =
//   check2 > numberOperation
//     ? 'No'
//     : check === numberOperation || check % 2 === 0
//     ? 'Yes'
//     : 'No';

// return result;
// //-------------------------Solution

// //Fizbuzz
// function fizbuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     }
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log('Fizz');
//     }
//     if (i % 3 !== 0 && i % 5 === 0) {
//       console.log('Buzz');
//     }
//     if (i % 3 !== 0 && i % 5 !== 0) {
//       console.log(i);
//     }
//   }
// }

// fizbuzz(15);

//--------------------------Question-Roman to Integer------------
/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
//   const romanValues = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     const currValue = romanValues[s[i]];

//     if (i < s.length - 1 && currValue < romanValues[s[i + 1]]) {
//       result -= currValue;
//     } else {
//       result += currValue;
//     }
//   }

//   return result;
// };

// const unique = (arr) => [...new Set(arr)];
// unique([1, 2, 2, 3, 4, 4, 5, 1]); // [1, 2, 3, 4, 5]
// function unique(arr) {
//     var u = {}, a = [];
//     for(var i = 0, l = arr.length; i < l; ++i){
//         if(!u.hasOwnProperty(arr[i])) {
//             a.push(arr[i]);
//             u[arr[i]] = 1;
//         }
//     }
//     return a;
// }

// let check_duplicate_in_array = (input_array) => {
//   input_array = input_array.sort((a, b) => a - b);
//   let duplicate_elements = [];
//   for (index in input_array) {
//     if (input_array[index] === input_array[index - 1]) {
//       duplicate_elements.push(input_array[index]);
//     }
//   }
//   return [...new Set(duplicate_elements)];
// };
// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 1];
// console.log(check_duplicate_in_array(arr));

let check_duplicate_in_array = (input_array) => {
  let duplicate_elements = [];
  for (element of input_array) {
    if (input_array.indexOf(element) !== input_array.lastIndexOf(element)) {
      duplicate_elements.push(element);
    }
  }
  return [...new Set(duplicate_elements)];
};
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr));

//JavaScript testing - JEST
function concatStrings(strA, strB) {
  return strA + strB;
}
expect(concatStrings('abc', 'def')).toBe('abcdef');
