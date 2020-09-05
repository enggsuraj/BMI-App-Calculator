import {
  calculateBMIKG,
  calculateBMILBS,
  getColor,
  DOMstrings,
  HTMLstrings,
  BMIMETHODstrings,
} from "./app-function.js";

import { validateData } from "./validate.js";

//HANDLE EVENT ON RESET
const reset = () => {
  let BMIMethod = document.querySelector(DOMstrings.BMIMethod).value;
  if (BMIMethod === BMIMETHODstrings.kgcm) {
    document.querySelector(DOMstrings.weight).value = 0;
    document.querySelector(DOMstrings.height).value = 0;
    document.querySelector(DOMstrings.BMIResult).textContent = "";
    document.querySelector(DOMstrings.status_color).style.backgroundColor =
      "#2a2c29";
    document.querySelector(DOMstrings.status).textContent = "";
  } else if (BMIMethod === BMIMETHODstrings.poundfeetinch) {
    document.querySelector(DOMstrings.weight).value = 0;
    document.querySelector(DOMstrings.Feet).selectedIndex = "0";
    document.querySelector(DOMstrings.Inches).selectedIndex = "0";
    document.querySelector(DOMstrings.BMIResult).textContent = "";
    document.querySelector(DOMstrings.status).textContent = "";
    document.querySelector(DOMstrings.status_color).style.backgroundColor =
      "#2a2c29";
  }
};

//HANDLE DATA ON SUBMIT & ENTER
const handleData = () => {
  let BMIMethod = document.querySelector(DOMstrings.BMIMethod).value;
  let color = "";
  if (BMIMethod === BMIMETHODstrings.kgcm) {
    let result = calculateBMIKG();
    color = getColor(result[1]);
    document.querySelector(DOMstrings.BMIResult).textContent = result[0];
    document.querySelector(DOMstrings.status).textContent = result[1];
    document.querySelector(
      DOMstrings.status_color
    ).style.backgroundColor = color;
  } else {
    let result = calculateBMILBS();
    document.querySelector(DOMstrings.BMIResult).textContent = result[0];
    document.querySelector(DOMstrings.status).textContent = result[1];
    color = getColor(result[1]);
  }
  document.querySelector(DOMstrings.status_color).style.backgroundColor = color;
};

//DROPDOWN SELECT EVENT
document.querySelector(DOMstrings.BMIMethod).addEventListener("change", (e) => {
  let BMIMethod = e.target.value;
  if (BMIMethod === BMIMETHODstrings.kgcm) {
    document.querySelector(DOMstrings.content).innerHTML = HTMLstrings.kg_cm;
  } else {
    document.querySelector(DOMstrings.content).innerHTML =
      HTMLstrings.feet_inch;
  }
});

//ENTER EVENT
document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    if (validateData()) {
      handleData();
    }
  }
});

//SUBMIT EVENT
document.querySelector(DOMstrings.btnsubmit).addEventListener("click", () => {
  if (validateData()) {
    handleData();
  }
});

//RESET EVENT
document.querySelector(DOMstrings.btnreset).addEventListener("click", reset);
