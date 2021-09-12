// in server
import fetch from "node-fetch";
import { button, error, log } from "./utils/console";

//  las funciones en javascript son objetos
// y podemos pasar objetos como parametros
const myFunction = function () {
  log("Hello :)");
};

const sleep = (time, callback) => {
  setTimeout(() => {
    callback();
  }, time);
};

const getData = (callback) => {
  let data = ["one", "two"];
  setTimeout(() => {
    callback(
      {
        err: "Not numbers to show",
      },
      null
    );
  }, 2000);
};

button("start", "start", () => {
  log("start ");
  //   sleep(1000, () => {
  //     log("Hello :)");
  //     log("finish");
  //   });
  getData((err, data) => {
    if (err) {
      error(err);
      return;
    }
    log(data);
  });
});

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
