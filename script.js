let input = document.getElementById("input");
let userInput = document.querySelectorAll(".keypadContainer button");
let result = document.getElementById("result");

const inputDisplay = (num) => {
  const button = num.target.value;
  const id = num.target.id;

  if (button === "reset") {
    input.innerHTML = 0;
  } else if (input.innerHTML === "0") {
    if (id === "numKey") {
      input.innerHTML = button;
    }
  } else if (button === "delete") {
    if (input.innerHTML.length <= 1) {
      input.innerHTML = 0;
    } else {
      input.innerHTML = input.innerHTML.replace(/.$/, "");
    }
  } else {
    input.innerHTML += button;
  }
};

const getResult = () => {
  const regex = /[+|\-|\*|/][0-9.]/g;
  if (input.innerHTML.match(regex)) {
    let tempInput = input.innerHTML;
    tempInput = tempInput.replace(/,/g, "");

    let result = eval(tempInput);

    let roundedResult = Math.round(result * 100) / 100;

    let formatedResult = roundedResult.toLocaleString("en-US");

    input.innerHTML = formatedResult;
  }
};

for (const el of userInput) {
  el.addEventListener("click", inputDisplay);
}

result.addEventListener("click", getResult);
