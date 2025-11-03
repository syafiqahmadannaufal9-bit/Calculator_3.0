const btn = document.getElementById("toggleBtn");
const display1 = document.querySelector(".display");
const displayNumber = document.querySelector(".display-number");
const history = document.querySelector("#history");
const historyList = document.querySelector("#historyList");
const calculator = document.querySelector(".calculator");
const buttons = document.querySelectorAll("button");
const C = document.querySelector(".C");

    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      display1.classList.toggle("dark-mode");
      displayNumber.classList.toggle("dark-mode");
      history.classList.toggle("dark-mode");
      historyList.classList.toggle("dark-mode");
      calculator.classList.toggle("dark-mode");
      buttons.forEach(button => button.classList.toggle("dark-mode"));
      C.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "light mode";
      } else {
        btn.textContent = "dark mode";
      }
    });


    let display = document.getElementById('display');

    function append(value) {
      if (display.innerText === '0') {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    function clearDisplay() {
      display.innerText = '0';
    }
function calculate() {
  try {
    const expression = display.innerText;
    const result = eval(expression.replace('%', '/100'));
    display.innerText = result;

    // Tambahkan ke riwayat
    addToHistory(expression + ' = ' + result);
  } catch {
    display.innerText = 'Error';
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById('historyList');
  const item = document.createElement('li');
  item.textContent = entry;
  item.style.padding = '5px 0';
  historyList.prepend(item);
}

