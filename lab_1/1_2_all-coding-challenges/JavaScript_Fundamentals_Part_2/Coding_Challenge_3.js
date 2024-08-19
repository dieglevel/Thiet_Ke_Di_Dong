var Mark = {
    name: "Mark",
    weight: 78,
    height: 1.69,
}

var John = {
    name: "John",
    weight: 92,
    height: 1.95,
}

function calcBMI(weight, height) {
    return Math.round(weight / (height ** 2) * 10) / 10 ;
}

Mark.bmi = calcBMI(Mark.weight, Mark.height);
John.bmi = calcBMI(John.weight, John.height);

if (Mark.bmi > John.bmi) {
    console.log(`${Mark.name}'s BMI (${Mark.bmi}) is higher than ${John.name}'s BMI (${John.bmi})`);
}
else {
    console.log(`${John.name}'s BMI (${John.bmi}) is higher than ${Mark.name}'s BMI (${Mark.bmi})`);
}
