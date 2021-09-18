// import { log } from "./utils/console";

// import { filter } from "lodash";

// const map = (arr, callback) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const newElement = callback(element, i, arr);
//     newArr.push(newElement);
//   }
//   return newArr;
// };

// // const newNums = map(arr, (item) => {
// //     return item + 1;
// // });

// // log(newNums);
// const wrapMap = (callback) => (arr) => map(arr, callback);

// let nums = [1, 2, 3, 4];
// let nums2 = [2, 3, 4, 5, 6];

// const amountOne = wrapMap((num) => ++num);

// // log(amountOne(nums));

// const newFilter = (callback) => (arr) => arr.filter(callback);
// const even = newFilter((item) => item % 2 == 0);

// const pipe = (...fns) => {
//   return (val) => {
//     return fns.reduceRight((pr, cur) => {
//       return cur(pr);
//     }, val);
//   };
// };

// // log(amountOne(even(nums)));

// const result = pipe(amountOne, even)(nums);

// log(result);
