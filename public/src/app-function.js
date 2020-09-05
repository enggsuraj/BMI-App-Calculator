//HTML PAGE ID & CLASS OBJECTS
let DOMstrings = {
  main: ".main",
  content: ".content",
  status_color: ".status_color",
  bmi_res: ".bmi_res",

  BMIMethod: "#BMIMethod",
  genderForm: "#genderForm",
  weight: "#weight",
  height: "#height",
  Feet: "#Feet",
  Inches: "#Inches",
  BMIResult: "#BMIResult",
  status: "#status",
  btnsubmit: "#btn-submit",
  bmi_chart: "#bmi_chart",
  btnreset: "#btn-reset",
};

//SELECT SYSTEM OBJECTS
let BMIMETHODstrings = {
  kgcm: "kg/cm",
  poundfeetinch: "pound/inch",
};

//HTML STRINGS 
let HTMLstrings = {
  feet_inch:
    '<input id ="weight" placeholder="Enter weight"><span> in pounds</span><br><br><select name="Feet" id="Feet"><option value="">Height in Feet</option><option value="1">1 Feet</option><option value="2">2 Feet</option><option value="3">3 Feet</option><option value="4">4 Feet</option><option value="5">5 Feet</option><option value="6">6 Feet</option><option value="7">7 Feet</option><option value="8">8 Feet</option></select> &nbsp; <select name="Inches" id="Inches"><option value="">Inches</option><option value="1">0 inch</option><option value="1">1 inch</option><option value="2">2 inch</option><option value="3">3 inch</option><option value="4">4 inch</option><option value="5">5 inch</option><option value="6">6 inch</option><option value="7">7 inch</option><option value="8">8 inch</option><option value="9">9 inch</option><option value="10">10 inch</option><option value="11">11 inch</option></select>',
  kg_cm:
    '<input id ="weight" placeholder="Enter weight"><span> in kg</span><br><br><input id ="height" placeholder="Enter height"><span> in cm</span><br>',
  bmi_res: '<p id="BMIResult"></p>',
};

//CALCULATE BMI IN KG/CM
let calculateBMIKG = () => {
  let weight = document.querySelector(DOMstrings.weight).value;
  let height = document.querySelector(DOMstrings.height).value;
  let height_in_m = height / 100;
  let BMIData = weight / (height_in_m * height_in_m);
  let BMI = BMIData.toFixed(2);
  let statusData = getBMIStatus(BMI);

  return [BMI, statusData];
};

//CALCULATE BMI IN POUND/FEET
let calculateBMILBS = () => {
  let weight = document.querySelector(DOMstrings.weight).value;
  let feet = document.querySelector(DOMstrings.Feet).value;
  let inch = document.querySelector(DOMstrings.Inches).value;
  let height = parseInt(feet * 12) + parseInt(inch);
  let BMIData = 703 * (weight / (height * height));
  let BMI = BMIData.toFixed(2);
  let statusData = getBMIStatus(BMI);
  return [BMI, statusData];
};

//GET STATUS OF BMI RESULT
const getBMIStatus = (BMI) => {
  let status = "";
  if (BMI < 18.5) {
    status = "underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    status = "Healthy";
  } else if (BMI >= 25 && BMI <= 29.9) {
    status = "overweight";
  } else {
    status = "obese";
  }
  return status;
};

//DISPLAY COLOR
const getColor = (result) => {
  if (result === "underweight") {
    return "#00adef";
  } else if (result === "Healthy") {
    return "#5dae36";
  } else if (result === "overweight") {
    return "#f0a902";
  } else {
    return "#f28a31";
  }
};

export {
  getBMIStatus,
  calculateBMIKG,
  calculateBMILBS,
  getColor,
  DOMstrings,
  HTMLstrings,
  BMIMETHODstrings
};
