import { button, clean } from "./utils/console";

window.addEventListener("load", () => {
  button("clean", "clean", () => {
    clean();
  });
});
