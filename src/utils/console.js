const $app = document.querySelector("#app");
const $buttons = document.querySelector("#buttons");
export const log = (arg, error) => {
  const line = document.createElement("div");
  const log = document.createElement("pre");
  line.classList.add("line");
  if (error) {
    log.classList.add("error");
  }
  log.innerText = JSON.stringify(arg, null, 2);
  log.classList.add("log");
  line.appendChild(log);
  $app.appendChild(line);
};

export const error = (arg) => {
  log(arg, true);
};

export const clean = () => {
  $app.innerHTML = "";
};

export const button = (id, text, callback) => {
  const btn = document.createElement("button");
  btn.id = id;
  btn.innerText = text;
  if (callback) {
    btn.addEventListener("click", callback);
  }
  $buttons.appendChild(btn);
  return btn;
};
