//Vehicle Class
class Vehicle {
  //Constructor
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  //Getter
  get info() {
    return this.information();
  }

  //Method
  information() {
    return console.log(this.make, this.model, this.year);
  }
}

//Instance of Vehicle Class
const car1 = new Vehicle("Ford", "Focus", 2008);

//Console log displaying output
console.log(car1.info);

//Car Class which inherits from Vehicle class
class Cars extends Vehicle {
  //Constructor
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  //Getter
  get carinfo() {
    return this.infoInformation();
  }

  //Method which inherits from information method
  infoInformation() {
    super.information();
    return this.doors;
  }
}

//Instance of Vehicle Class
const car2 = new Cars("Ford", "Focus", 2008, 3);

//Console log displaying output
console.log(car2.carinfo);
