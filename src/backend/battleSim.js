export function fleetAttack(fleet, targetFleet) {
  console.log("switch");
  fleet.forEach((ship) => {
    const randomIndex = Math.floor(Math.random() * targetFleet.length);
    const target = targetFleet[randomIndex];
    console.log(`ship: ${ship.name} target: ${target.name}, hp ${target.hp}`);
    ship.attack(target);
    console.log(`target: ${target.name}, new hp: ${target.hp}`);
  });
}

export function eliminateDestroyedShips(fleet) {
  console.log("after volley");
  fleet.forEach((ship) => {
    console.log(`${ship.name}, remains with ${ship.hp} hp`);
    if (ship.hp <= 0) {
      console.log(`${ship.name} destroyed`);
    }
  });
  return fleet.filter((ship) => ship.hp > 0);
}
