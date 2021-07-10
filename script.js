let input = document.getElementById("input");
let userInput = document.querySelector(".keypadContainer");
let result = document.getElementById("result");

const inputDisplay = (num) => {
  const button = num.target.value;

  if (button === "reset") {
    input.innerHTML = 0;
  } else if (input.innerHTML === "0") {
    input.innerHTML = button;
  } else if (button === "delete") {
    if (input.innerHTML === "0") {
      input.innerHTML = 0;
    } else if (input.innerHTML.length === 1) {
      input.innerHTML = 0;
    } else {
      input.innerHTML = input.innerHTML.replace(/.$/, "");
    }
  } else {
    input.innerHTML += button;
  }
};

const getResult = () => {
  let resultInput = input.innerHTML;
  input.innerHTML = Math.round(eval(resultInput) * 1000) / 1000;
};

userInput.addEventListener("click", inputDisplay);
result.addEventListener("click", getResult);
