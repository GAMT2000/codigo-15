const containerInputBill = document.querySelector("#container-input-bill");
const containerInputPeople = document.querySelector("#container-input-people");
const containerPercentage = document.querySelector("#container-percentage");
const tipAmount = document.querySelector("#tip-amount")
const totalText = document.querySelector("#total")
const btnReset =document.querySelector("#btn-reset")

let valuePercentage = 0;
let currentSelect = null;

function setFocusInput(element) {
  element.children[1].focus();
}

function removeGreenLight(element) {
  element.classList.remove("bg-green-200");
  element.classList.add("bg-[#00494d]");
}

function setButtonSelect(element) {
  const spanValue = element.children[0].textContent;
  const spanCurrentValue = currentSelect?.children[0].textContent;
  const inputCustom = document.querySelector("input[name='custom']");

  if (inputCustom?.value) inputCustom.value = "";

  if (currentSelect) removeGreenLight(currentSelect);

  if (spanValue === spanCurrentValue) {
    removeGreenLight(currentSelect);
    currentSelect = null;
    valuePercentage = 0;
  } else {
    element.classList.remove("bg-[#00494d]");
    element.classList.add("bg-green-200");
    currentSelect = element;
    valuePercentage = Number(spanValue.replace("%", ""));
  }
}

function renderItemPercentage(value) {
  return `<div
            onclick="setButtonSelect(this)"
            class="bg-[#00494d] cursor-pointer text-white font-semibold text-xl rounded-md p-3 text-center"
          >
            <span>${value}</span>
          </div>`;
}

function renderInput(icon, placeholder, name) {
  return `<div
          class="flex items-center p-3 rounded-md bg-green-100/50 cursor-text"
          onclick="setFocusInput(this)"
        >
          <img src="${icon}" alt="" />
          <input
            type="text"
            name="${name}"
            placeholder="${placeholder}"
            class="w-full text-right outline-none bg-transparent text-green-900 text-xl font-semibold"
          />
        </div>`;
}

function generatePercentageList() {
  const percentages = ["5%", "10%", "15%", "25%", "50%"];

  percentages.forEach((percentage) => {
    containerPercentage.innerHTML += renderItemPercentage(percentage);
  });

  containerPercentage.innerHTML += renderInput(null, "Custom", "custom");
}

generatePercentageList();

containerInputBill.innerHTML = renderInput(
  "./assets/icon-dollar.svg",
  "0.0",
  "input-bill"
);

containerInputPeople.innerHTML = renderInput(
  "./assets/icon-person.svg",
  "0",
  "input-people"
);

const inputCustom = document.querySelector("input[name='custom']");
const inputBill = document.querySelector("input[name='input-bill']") 
const inputPeople = document.querySelector("input[name='input-people']") 

inputCustom.onkeyup = function (event) {
  valuePercentage = Number(event.target.value);
  if (currentSelect) {
    removeGreenLight(currentSelect);
    currentSelect = null;
  }
};

inputPeople.onkeyup = function() {
  const bill = inputBill.value
  if (!valuePercentage || !bill) {
    this.value = ""
    alert("debe completar los campos")
    return
  }

  const total = (bill * valuePercentage)/100
  const person = total/this.value

  tipAmount.textContent = `$${person.toFixed(2)}`
  totalText.textContent = `$${total.toFixed(2)}`
}

btnReset.onclick = function() {
  valuePercentage= 0
  inputBill.value=""
  inputPeople.value=""
  tipAmount.textContent = "$0.00"
  totalText.textContent = "$0.00"
}