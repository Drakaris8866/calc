let exp = "";

const buttons = document.querySelector(".number-buttons");
buttons.addEventListener("click", handleNumClick);

function handleNumClick(e) {
  if (e.target.tagName === "DIV") return;
  const screen = document.querySelector(".screen");

  if (e.target.innerHTML === "AC") {
    screen.innerHTML = " ";
    exp = "";
  } else if (e.target.innerHTML !== "AC") {
    screen.innerHTML += e.target.innerHTML;
    exp += e.target.innerHTML;
  }
}
const action_buttons = document.querySelector(".action-buttons");

function handleActionClick(e) {
  const screen = document.querySelector(".screen");

  if (e.target.innerHTML !== "=") {
    exp += e.target.innerHTML;
    screen.innerHTML += e.target.innerHTML;
  } else if (e.target.innerHTML === "=") {
    try {
      if (exp) {
        screen.innerHTML = eval(exp);
      }
    } catch (error) {
      screen.innerHTML = "Ошибка";
    }
  }
}

action_buttons.addEventListener("click", handleActionClick);
