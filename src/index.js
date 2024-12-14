"use strict";

import "./index.css";

import {
  fleetOneForm,
  fleetTwoForm,
  addNewShipButtonOne,
  addNewShipButtonTwo,
  submitFleetOne,
  submitFleetTwo,
} from "./frontend/fleetForm";

let fleetOneSelected = false;
let fleettTwoSelected = false;

function handleNavigation() {
  const fleetOneContainer = document.querySelector("#fleet-one");
  const fleetTwoContainer = document.querySelector("#fleet-two");

  if (!fleetOneSelected) {
    fleetOneContainer.appendChild(fleetOneForm);
    fleetOneContainer.appendChild(addNewShipButtonOne);
    fleetOneContainer.appendChild(submitFleetOne);
  } else {
    fleetOneForm.innerHTML = "";
  }

  if (!fleettTwoSelected) {
    fleetTwoContainer.appendChild(fleetTwoForm);
    fleetTwoContainer.appendChild(addNewShipButtonTwo);
    fleetTwoContainer.appendChild(submitFleetTwo);
  }
}

function setupEventListeners() {
  const submitFleetOne = document.querySelector("#submit-fleet-one");
  const submitFleetTwo = document.querySelector("#submit-fleet-two");

  submitFleetOne.addEventListener("click", () => {
    fleetOneSelected = true;
    handleNavigation();
  });

  submitFleetTwo.addEventListener("click", () => {
    fleettTwoSelected = true;
    handleNavigation();
  });
}

handleNavigation();
setupEventListeners();
