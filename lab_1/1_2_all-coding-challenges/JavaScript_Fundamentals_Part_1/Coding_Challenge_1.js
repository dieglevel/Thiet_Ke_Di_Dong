var Mark = {
    weight: 78,
    height: 1.69,
}

var John = {
    weight: 92,
    height: 1.95,
}

var Mark2 = {
    weight: 95,
    height: 1.88,
}

var John2 = {
    weight: 85,
    height: 1.76,
}

function BMI(weight, height) {
    return weight / height ** 2;
}

var MarkBMI = BMI(Mark.weight, Mark.height);
var JohnBMI = BMI(John.weight, John.height);
var MarkHigherBMI = MarkBMI > JohnBMI;

console.log("Mark's BMI: " + MarkBMI);
console.log("John's BMI: " + JohnBMI);
console.log("Is Mark's BMI higher than John's? " + MarkHigherBMI);


var MarkBMI2 = BMI(Mark2.weight, Mark2.height);
var JohnBMI2 = BMI(John2.weight, John2.height);
var MarkHigherBMI2 = MarkBMI2 > JohnBMI2;

console.log("Mark's BMI: " + MarkBMI2);
console.log("John's BMI: " + JohnBMI2);
console.log("Is Mark's BMI higher than John's? " + MarkHigherBMI2);
