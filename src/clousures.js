import { log, button } from "./utils/console";

function counter() {
  let count = 0;
  const sum = () => {
    count++;
    log(count);
  };
  const rest = () => {
    count--;
    log(count);
  };
  return {
    rest,
    sum,
  };
}

const { sum, rest } = counter();

button("plus", "+", () => {
  sum();
});

button("minus", "-", () => {
  rest();
});

// sum();
// sum();
// sum();
// sum();
// sum();
