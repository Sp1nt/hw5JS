function Car(manufacturer, model, year, average_speed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.average_speed = average_speed;

    this.show = function () {
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average speed: ${this.average_speed}`);
    }

    this.timeCalculation = function (distance) {
        return Math.ceil(distance / this.average_speed) + Math.floor(distance / (4 * this.average_speed));
    }
}

let car1 = new Car('Audi', 'S', 2018, 120);
car1.show();
console.log(car1.timeCalculation(500));



function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;

    this.add = function(n) {
        let resultN = this.numerator * n.denominator + n.numerator * this.denominator;
        let resultD = this.denominator * n.denominator;
        return new Fraction(resultN, resultD);
    };

    this.subtract = function(n) {
        let resultN = this.numerator * n.denominator - n.numerator * this.denominator;
        let resultD = this.denominator * n.denominator;
        return new Fraction(resultN, resultD);
    };

    this.multiply = function(n) {
        let resultN = this.numerator * n.numerator;
        let resultD = this.denominator * n.denominator;
        return new Fraction(resultN, resultD);
    };

    this.divide = function(n) {
        let resultN = this.numerator * n.denominator;
        let resultD = this.denominator * n.numerator;
        return new Fraction(resultN, resultD);
    };

    this.reduce = function() {
        for (let i = this.denominator; i > 0; i--) {
            if (this.numerator % i == 0 && this.denominator % i == 0) {
                this.numerator /= i;
                this.denominator /= i;
                break;
            }
        }
        return new Fraction(this.numerator, this.denominator);
    };
}

let a = new Fraction(6, 3);
let b = new Fraction(8, 4);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.multiply(b));
console.log(a.divide(b));
console.log(a.reduce());



function FullTime(hours = 0, minutes = 0, seconds = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    if (!(hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60)) {
        console.log('Ошибка!');
        return false;
    }

    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

    this.displayTime = function () {
        console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
    };

    this.addSeconds = function (s) {
        let result = this.getSeconds(this.hours, this.minutes, this.seconds) + s;
        return this.setTime(result);
    };

    this.addMinutes = function (m) {
        let result = this.getSeconds(this.hours, this.minutes, this.seconds) + m * 60;
        return this.setTime(result);
    };

    this.addHours = function (h) {
        let result = this.getSeconds(this.hours, this.minutes, this.seconds) + h * 3600;
        return this.setTime(result);
    };

    this.getSeconds = function (a, b, c) {
        return (a * 3600) + (b * 60) + c;
    };


    this.setTime = function (n) {
        this.hours = Math.floor(n / 3600) % 24;
        this.minutes = Math.floor((n % 3600) / 60);
        this.seconds = n % 60;

        this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
        this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    };
}

let time = new FullTime(20, 30, 45);
time.displayTime();

time.addSeconds(30);
time.displayTime();// Ожидаемый результат: "20 : 31 : 15"

time.addMinutes(25);
time.displayTime();// Ожидаемый результат: "20 : 56 : 15"

time.addHours(4);
time.displayTime();// Ожидаемый результат: "00 : 56 : 15"