export default class Engine {
  constructor(type) {
    if (type === "resistojet") {
      this.name = "resistojet";
      this.metalCost = 2;
      this.organicCost = 0;
      this.speed = 1;
      this.fuel = 1;
    } else if (type === "light_chemical") {
      this.name = "lighr chemical";
      this.metalCost = 3;
      this.organicCost = 1;
      this.speed = 2;
      this.fuel = 3;
    } else if (type === "heavy_chemical") {
      this.name = "heavy chemical";
      this.metalCost = 4;
      this.organicCost = 2;
      this.speed = 3;
      this.fuel = 4;
    }
  }
}
