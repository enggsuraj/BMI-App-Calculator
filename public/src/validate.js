import { DOMstrings, BMIMETHODstrings } from "./app-function.js";

//VALIDATE JS INPUT
const validateData = () => {
  try {
    let BMIMethod = document.querySelector(DOMstrings.BMIMethod).value;

    if (BMIMethod === BMIMETHODstrings.kgcm) {
      let w = parseInt(document.querySelector(DOMstrings.weight).value);
      let h = parseInt(document.querySelector(DOMstrings.height).value);
      if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
        return true;
      } else {
        alert("Enter valid number");
      }
    } else if (BMIMethod === BMIMETHODstrings.poundfeetinch) {
      let w = parseInt(document.querySelector(DOMstrings.weight).value);
      let f = document.querySelector(DOMstrings.Feet).selectedIndex;
      let i = document.querySelector(DOMstrings.Inches).selectedIndex;

      if (Number.isInteger(w) && w > 0 && f != "0" && i != "0") {
        return true;
      } else {
        alert("Enter valid number");
      }
    } else {
      alert("Select system");
    }
  } catch (e) {
    console.log(e);
  }
};

export { validateData };
