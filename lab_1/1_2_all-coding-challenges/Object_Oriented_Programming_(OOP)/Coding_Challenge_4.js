class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Battery charge is now ${this.#charge}%`);
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(
            `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`
        );
        return this;
    }
}

const car1 = new EVCl('Rivian', 120, 23);
car1.accelerate().brake().chargeBattery(50).accelerate();