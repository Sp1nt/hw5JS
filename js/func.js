function Car(manufacturer, model, year, average_speed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.average_speed = average_speed;

    this.show = function () {
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
        console.log("Average speed: " + this.average_speed);
    }

    this.timeCalculation = function (distance) {
        return Math.ceil(distance / this.average_speed) + Math.floor(distance / (4 * this.average_speed));
    }
}

let car1 = new Car('Tesla', 'S', 2020, 60);
car1.show();
console.log(car1.timeCalculation(500));
