const possibleModules = [
  "survey",
  "radio",
  "radar",
  "transport",
  "fuel_storage",
  "small_cannons",
  "large_cannons",
  "plasma_throwers",
  "torpedo",
  "self_detonation",
  "ram",
];

function moduleLoader(shipType, i) {
  let moduleNumber;
  if (shipType === "gunship") {
    moduleNumber = 1;
  } else if (shipType === "corvette") {
    moduleNumber = 2;
  } else if (shipType === "frigate") {
    moduleNumber = 3;
  } else if (shipType === "light_cruiser") {
    moduleNumber = 4;
  } else if (shipType === "heavy_cruiser") {
    moduleNumber = 6;
  } else if (shipType === "dreadnought") {
    moduleNumber = 8;
  }

  const modules = [];

  for (let n = 1; n <= moduleNumber; n++) {
    const newModule = document.createElement("select");
    newModule.setAttribute("name", `ship${i}-module${n}`);
    const descrOption = document.createElement("option");
    descrOption.innerText = "choose module";
    descrOption.setAttribute("value", "");
    descrOption.setAttribute("selected", true);
    newModule.appendChild(descrOption);

    possibleModules.forEach((option) => {
      console.log(option);
      const moduleOption = document.createElement("option");
      moduleOption.innerText = option;
      moduleOption.setAttribute("value", option);
      newModule.appendChild(moduleOption);
    });
    modules.push(newModule);
  }
  return modules;
}

function createFormElement(i) {
  const shipTypes = [
    "gunship",
    "corvette",
    "frigate",
    "light_cruiser",
    "heavy_cruiser",
    "dreadnought",
  ];

  const shipInput = document.createElement("select");
  const numberLabel = document.createElement("label");
  const numberInput = document.createElement("input");
  const elementContainer = document.createElement("div");

  numberLabel.setAttribute("for", "number");
  numberLabel.innerText = "Amount: ";

  numberInput.setAttribute("type", "number");
  numberInput.setAttribute("min", 0);
  numberInput.setAttribute("name", `number-${i}`);
  numberInput.setAttribute("id", "number");

  shipInput.setAttribute("name", `ship-${i}`);
  const selectDescription = document.createElement("option");
  selectDescription.setAttribute("value", "");
  selectDescription.innerText = "Select ship type";
  selectDescription.setAttribute("selected", "true");
  shipInput.appendChild(selectDescription);

  for (let z = 0; z < shipTypes.length; z++) {
    const option = document.createElement("option");
    option.setAttribute("value", shipTypes[z]);
    option.innerText = shipTypes[z];
    shipInput.appendChild(option);
  }

  const inputGroupOne = document.createElement("div");
  const inputGroupTwo = document.createElement("div");
  inputGroupOne.setAttribute("class", "input-group");
  inputGroupTwo.setAttribute("class", "input-group");
  inputGroupOne.appendChild(numberLabel);
  inputGroupTwo.appendChild(shipInput);
  inputGroupOne.appendChild(numberInput);

  elementContainer.setAttribute("class", "element-container");
  elementContainer.appendChild(inputGroupOne);
  elementContainer.appendChild(inputGroupTwo);

  const moduleContainer = document.createElement("div");
  moduleContainer.setAttribute("class", "module-container");
  elementContainer.appendChild(moduleContainer);

  shipInput.addEventListener("change", () => {
    moduleContainer.innerHTML = "";
    moduleLoader(shipInput.value, i).forEach((module) => {
      moduleContainer.appendChild(module);
    });
  });

  return elementContainer;
}

let i = 0;

const fleetOneForm = document.createElement("form");
fleetOneForm.setAttribute("id", "fleet-one-form");
fleetOneForm.appendChild(createFormElement(i));
const addNewShipButtonOne = document.createElement("button");
addNewShipButtonOne.setAttribute("type", "button");
addNewShipButtonOne.innerText = "Add Ship";
addNewShipButtonOne.addEventListener("click", () => {
  i++;
  fleetOneForm.appendChild(createFormElement(i));
});
const submitFleetOne = document.createElement("button");
submitFleetOne.setAttribute("type", "button");
submitFleetOne.setAttribute("id", "submit-fleet-one");
submitFleetOne.innerText = "Use Fleet";

const fleetTwoForm = document.createElement("form");
fleetTwoForm.setAttribute("id", "fleet-two-form");
fleetTwoForm.appendChild(createFormElement(i));
const addNewShipButtonTwo = document.createElement("button");
addNewShipButtonTwo.setAttribute("type", "button");
addNewShipButtonTwo.innerText = "Add Ship";
addNewShipButtonTwo.addEventListener("click", () => {
  i++;
  fleetTwoForm.appendChild(createFormElement(i));
});
const submitFleetTwo = document.createElement("button");
submitFleetTwo.setAttribute("type", "button");
submitFleetTwo.setAttribute("id", "submit-fleet-two");
submitFleetTwo.innerText = "Use Fleet";

export {
  fleetOneForm,
  fleetTwoForm,
  addNewShipButtonOne,
  addNewShipButtonTwo,
  submitFleetOne,
  submitFleetTwo,
};
