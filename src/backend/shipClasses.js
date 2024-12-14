import Engine from "../ship_modules/engine";
import Module from "../ship_modules/module";
import dice from "../utils/dice";

class Ship {
  constructor(engineType) {
    this.engine = new Engine(engineType);
    this.totalMetalCost = this.engine.metalCost;
    this.totalorganicCost = this.engine.organicCost;
    this.modules = [];
  }

  attack(target) {
    let damage = 0;
    this.modules.forEach((module) => {
      if (module.type === "weapon") {
        damage += dice(module.damage);
      }
    });
    target.hp -= damage;
    return damage;
  }
}

class Gunship extends Ship {
  constructor(engineType, moduleOne) {
    super(engineType);
    this.totalMetalCost += 5;
    this.name = "gunship";
    this.hp = 10;
    this.moduleOne = new Module(moduleOne);
    this.modules = [...this.modules, this.moduleOne];
    this.totalMetalCost += this.moduleOne.metalCost;
    this.totalorganicCost += this.moduleOne.organicCost;
  }
}

class Corvette extends Ship {
  constructor(engineType, moduleOne, moduleTwo) {
    super(engineType);
    this.totalMetalCost += 5;
    this.name = "corvette";
    this.hp = 8;
    this.moduleOne = new Module(moduleOne);
    this.moduleTwo = new Module(moduleTwo);
    this.modules = [...this.modules, this.moduleOne, this.moduleTwo];
    this.totalMetalCost += this.moduleOne.metalCost + this.moduleTwo.metalCost;
    this.totalorganicCost +=
      this.moduleOne.organicCost + this.moduleTwo.organicCost;
  }
}

class Frigate extends Ship {
  constructor(engineType, moduleOne, moduleTwo, moduleThree) {
    super(engineType);
    this.totalMetalCost += 8;
    this.name = "frigate";
    this.hp = 14;
    this.moduleOne = new Module(moduleOne);
    this.moduleTwo = new Module(moduleTwo);
    this.moduleThree = new Module(moduleThree);
    this.modules = [
      ...this.modules,
      this.moduleOne,
      this.moduleTwo,
      this.moduleThree,
    ];
    this.totalMetalCost +=
      this.moduleOne.metalCost +
      this.moduleTwo.metalCost +
      this.moduleThree.metalCost;
    this.totalorganicCost +=
      this.moduleOne.organicCost +
      this.moduleTwo.organicCost +
      this.moduleThree.organicCost;
  }
}

class LightCruiser extends Ship {
  constructor(engineType, moduleOne, moduleTwo, moduleThree, moduleFour) {
    super(engineType);
    this.totalMetalCost += 10;
    this.name = "light cruiser";
    this.hp = 16;
    this.moduleOne = new Module(moduleOne);
    this.moduleTwo = new Module(moduleTwo);
    this.moduleThree = new Module(moduleThree);
    this.moduleFour = new Module(moduleFour);
    this.modules = [
      ...this.modules,
      this.moduleOne,
      this.moduleTwo,
      this.moduleThree,
      this.moduleFour,
    ];
    this.totalMetalCost +=
      this.moduleOne.metalCost +
      this.moduleTwo.metalCost +
      this.moduleThree.metalCost +
      this.moduleFour.metalCost;
    this.totalorganicCost +=
      this.moduleOne.organicCost +
      this.moduleTwo.organicCost +
      this.moduleThree.organicCost +
      this.moduleFour.organicCost;
  }
}

class HeavyCruiser extends Ship {
  constructor(
    engineType,
    moduleOne,
    moduleTwo,
    moduleThree,
    moduleFour,
    moduleFive,
    moduleSix
  ) {
    super(engineType);
    this.totalMetalCost += 13;
    this.name = "heavy cruiser";
    this.hp = 20;
    this.moduleOne = new Module(moduleOne);
    this.moduleTwo = new Module(moduleTwo);
    this.moduleThree = new Module(moduleThree);
    this.moduleFour = new Module(moduleFour);
    this.moduleFive = new Module(moduleFive);
    this.moduleSix = new Module(moduleSix);
    this.modules = [
      ...this.modules,
      this.moduleOne,
      this.moduleTwo,
      this.moduleThree,
      this.moduleFour,
      this.moduleFive,
      this.moduleSix,
    ];
    this.totalMetalCost +=
      this.moduleOne.metalCost +
      this.moduleTwo.metalCost +
      this.moduleThree.metalCost +
      this.moduleFour.metalCost +
      this.moduleFive.metalCost +
      this.moduleSix.metalCost;
    this.totalorganicCost +=
      this.moduleOne.organicCost +
      this.moduleTwo.organicCost +
      this.moduleThree.organicCost +
      this.moduleFour.organicCost +
      this.moduleFive.metalCost +
      this.moduleSix.metalCost;
  }
}

class Dreadnought extends Ship {
  constructor(
    engineType,
    moduleOne,
    moduleTwo,
    moduleThree,
    moduleFour,
    moduleFive,
    moduleSix,
    moduleSeven,
    moduleEight
  ) {
    super(engineType);
    this.totalMetalCost += 16;
    this.name = "dreadnought";
    this.hp = 26;
    this.moduleOne = new Module(moduleOne);
    this.moduleTwo = new Module(moduleTwo);
    this.moduleThree = new Module(moduleThree);
    this.moduleFour = new Module(moduleFour);
    this.moduleFive = new Module(moduleFive);
    this.moduleSix = new Module(moduleSix);
    this.moduleSeven = new Module(moduleSeven);
    this.moduleEight = new Module(moduleEight);
    this.modules = [
      ...this.modules,
      this.moduleOne,
      this.moduleTwo,
      this.moduleThree,
      this.moduleFour,
      this.moduleFive,
      this.moduleSix,
      this.moduleSeven,
      this.moduleEight,
    ];
    this.totalMetalCost +=
      this.moduleOne.metalCost +
      this.moduleTwo.metalCost +
      this.moduleThree.metalCost +
      this.moduleFour.metalCost +
      this.moduleFive.metalCost +
      this.moduleSix.metalCost +
      this.moduleSeven.metalCost +
      this.moduleEight.metalCost;
    this.totalorganicCost +=
      this.moduleOne.organicCost +
      this.moduleTwo.organicCost +
      this.moduleThree.organicCost +
      this.moduleFour.organicCost +
      this.moduleFive.metalCost +
      this.moduleSix.metalCost +
      this.moduleSeven.metalCost +
      this.moduleEight.metalCost;
  }
}

export { Gunship, Corvette, Frigate, LightCruiser, HeavyCruiser, Dreadnought };
