import {
  Gunship,
  Corvette,
  Frigate,
  LightCruiser,
  HeavyCruiser,
  Dreadnought,
} from "../shipClasses";

function fleetCreator(shipArray) {
  const fleet = [];
  shipArray.forEach((ship) => {
    if (ship[0] === "gunship") {
      const newShip = new Gunship(ship[1], ship[2]);
      newShip.name = `gunship ${shipArray.indexOf(ship)}`;
      fleet.push(newShip);
    } else if (ship[0] === "corvette") {
      const newShip = new Corvette(ship[1], ship[2], ship[3]);
      newShip.name = `corvette ${shipArray.indexOf(ship)}`;
      fleet.push(newShip);
    } else if (ship[0] === "frigate") {
      const newShip = new Frigate(ship[1], ship[2], ship[3], ship[4]);
      newShip.name = `frigate ${shipArray.indexOf(ship)}`;
      fleet.push(newShip);
    } else if (ship[0] === "light_cruiser") {
      const newShip = new LightCruiser(
        ship[1],
        ship[2],
        ship[3],
        ship[4],
        ship[5]
      );
      newShip.name = `light cruiser ${shipArray.indexOf(ship)}`;
      fleet.push(newShip);
    } else if (ship[0] === "heavy_cruiser") {
      const newShip = new HeavyCruiser(
        ship[1],
        ship[2],
        ship[3],
        ship[4],
        ship[5],
        ship[6],
        ship[7]
      );
      newShip.name = `heavy cruiser ${shipArray.indexOf(ship)}`;
      fleet.push(newShip);
    } else if (ship[0] === "dreadnought") {
      const newShip = new Dreadnought(
        ship[1],
        ship[2],
        ship[3],
        ship[4],
        ship[5],
        ship[6],
        ship[7],
        ship[8],
        ship[9]
      );
      newShip.name = `dreadnought ${shipArray.indexOf(ship)}`;
      fleet.push(newShip);
    }
  });
  let metalCost = 0;
  let organicCost = 0;
  fleet.forEach((ship) => {
    metalCost += ship.totalMetalCost;
    organicCost += ship.totalorganicCost;
  });
  return { fleet, metalCost, organicCost };
}

export default fleetCreator;
