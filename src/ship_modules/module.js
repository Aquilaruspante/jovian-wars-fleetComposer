export default class Module {
  constructor(name) {
    if (name === "survey") {
      this.name = "survey";
      this.description =
        "Is able to scan the surfaces of moons, required for colonization. Works on any moon. Must be in a low orbit. Required for building on a moon.";
      this.restrictions = "No Large or small hulls";
      this.type = "support";
      this.metalCost = 2;
      this.organicCost = 0;
    } else if (name === "transport") {
      this.name = "transport";
      this.description =
        "Can carry four infantry units, or twenty of any resource (Organics, metal, supplies)";
      this.restrictions = "";
      this.type = "support";
      this.metalCost = 1;
      this.organicCost = 1;
    } else if (name === "radio") {
      this.name = "radio";
      this.description = "Connects fleet to radio network";
      this.restrictions = "";
      this.type = "support";
      this.metalCost = 2;
      this.organicCost = 0;
    } else if (name === "radar") {
      this.name = "radar";
      this.description =
        "Doubles the range can detect enemy fleets and projectiles. Improves Accuracy of the ship it is mounted on";
      this.restrictions = "No Small Hulls";
      this.type = "support";
      this.metalCost = 2;
      this.organicCost = 0;
    } else if (name === "fuel_storage") {
      this.name = "fuel storage";
      this.description = "Doubles the fuel reserves of a ship";
      this.restrictions = "";
      this.type = "support";
      this.metalCost = 2;
      this.organicCost = 2;
    } else if (name === "small_cannons") {
      this.name = "small cannons";
      this.description =
        "Enables a ship to engage in regular and pass by comba";
      this.restrictions = "";
      this.type = "weapon";
      this.metalCost = 1;
      this.organicCost = 1;
      this.damage = 6;
    } else if (name === "large_cannons") {
      this.name = "large cannons";
      this.description =
        "Enables ships to engage in regular combat and pass by combat to greater effect.";
      this.restrictions = "No Small or Frigate, At most 4 per ship.";
      this.type = "weapon";
      this.metalCost = 2;
      this.organicCost = 1;
      this.damage = 8;
    } else if (name === "plasma_throwers") {
      this.name = "plasma thrower";
      this.description =
        "Engages in close quarters combat, with potential for devastating effect. However ships must close in, and expose themselves to extra damage.";
      this.restrictions =
        "No smalls, cannot engage in pass by combat, No Orbital Bombardment";
      this.type = "weapon";
      this.metalCost = 1;
      this.organicCost = 2;
      this.damage = 12;
    } else if (name === "torpedo") {
      this.name = "torpedo";
      this.description =
        "Enables ships to engage in combat from other orbits. Does not have to be launched at an occupied orbit. 5 fuel reserve";
      this.restrictions = "";
      this.type = "weapon";
      this.metalCost = 2;
      this.organicCost = 2;
      this.damage = 10;
    } else if (name === "self_detonation") {
      this.name = "self detonation";
      this.description =
        "Can detonate right next to enemy ships to inflict massive damage. Takes one combat turn to reach target. Cannot be used in pass by combat";
      this.restrictions = "Smalls";
      this.type = "weapon";
      this.metalCost = 0;
      this.organicCost = 4;
      this.damage = 20;
      this.damageSub = 5;
    } else if (name === "ram") {
      this.name = "ram";
      this.description =
        "Can ram enemy ships. Damage depends on acceleration. Not able to be used in pass-by combat";
      this.restrictions = "no smalls";
      this.type = "weapon";
      this.metalCost = 5;
      this.organicCost = 0;
      this.damage = 10;
      this.damageTimes = 2;
    }
  }
}
