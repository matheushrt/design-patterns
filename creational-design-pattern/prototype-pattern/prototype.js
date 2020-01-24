// // using Object.create as was recommended by ES5 standard
class Car {
  constructor() {
    this.numberOfWeels = 4;
    this.start = function() {
      return 'Started.';
    };
    this.stop = function() {
      return 'Stoped.';
    };
  }
}

const newCar = new Car();
newCar.__proto__.owner;
newCar.__proto__.setOwner = function(name) {
  return (this.owner = name);
};
newCar.setOwner('Elon');
console.log(newCar); // Car { numberOfWeels: 4, start: function, stop: function }
console.log(newCar.start()); // Started.
console.log(newCar.stop()); // Stoped.
console.log(newCar.owner); // Elon
