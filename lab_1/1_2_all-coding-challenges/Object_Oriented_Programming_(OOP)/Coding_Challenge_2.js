class CarCl {
    constructor(make) {
        this.make = make;
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const car1 = new CarCl('Ford');
car1.speedUS = 120;
console.log(`${car1.make} is going at ${car1.speed} km/h`);
console.log(`${car1.make} is going at ${car1.speedUS} mi/h`);

car1.accelerate();
car1.accelerate();
car1.brake();