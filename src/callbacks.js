// in server
import { log } from "./utils/console";

//  las funciones en javascript son objetos
// y podemos pasar objetos como parametros

log("Welcome");
setTimeout(() => {
  log("Am i late? 😶");
}, 3000);

log("let´s get started");

// log("We start");

// button("start", "start", () => {

// });

// getData((err, data) => {
//   if (err) {
//     error(err);
//     return;
//   }
//   log(data);
// });

// const sleep = (time, callback) => {
//   setTimeout(() => {
//     callback();
//   }, time);
// };

// const getData = (callback) => {
//   let data = ["one", "two"];
//   setTimeout(() => {
//     callback(
//       {
//         err: "Not numbers to show",
//       },
//       null
//     );
//   }, 2000);
// };

// const wrapFetch = (fetch) => {
//   return async (input, init) => {
//     return fetch(input, {
//       ...init,
//       body: JSON.stringify(init.body),
//       headers: {
//         "Content-Type": "application/json",
//         ...init.headers,
//       },
//     }).then((data) => data.json());
//   };
// };

// export const viFetch = wrapFetch(fetch);
// // in browser
// export const viFetch = wrapFetch(window.fetch);
