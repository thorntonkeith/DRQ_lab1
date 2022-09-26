class Bmi {
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  
    //Getter
    get total() {
      return this.calculateBMI();
    }
  
    //Method
    calculateBMI() {
      return this.weight / (this.height ** 2);
    }
  }
  
  //Instance of Class
  const joe = new Bmi(175, 183);
  
  //Console log showing output
  console.log(joe.total);
  