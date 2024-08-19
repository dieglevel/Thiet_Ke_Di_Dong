var Mark = {
  weight: 78,
  height: 1.69,
};

var John = {
  weight: 92,
  height: 1.95,
};

var Mark2 = {
  weight: 95,
  height: 1.88,
};

var John2 = {
  weight: 85,
  height: 1.76,
};

function BMI(weight, height) {
  return (
    Math.round(
      (weight / (height * height)) * 10
    ) / 10
  );
}

function compareBMI(person1, person2) {
  var person1BMI = BMI(
    person1.weight,
    person1.height
  );
  var person2BMI = BMI(
    person2.weight,
    person2.height
  );
  var person1HigherBMI = person1BMI > person2BMI;

  if (person1HigherBMI) {
    console.log(
      `per BMI is higher than Person 2's`
    );
  } else {
    console.log(
      "Person 2's BMI is higher than Person 1's"
    );
  }
}

var MarkBMI = BMI(Mark.weight, Mark.height);
var JohnBMI = BMI(John.weight, John.height);
var MarkHigherBMI = MarkBMI > JohnBMI;

console.log("Mark's BMI: " + MarkBMI);
console.log("John's BMI: " + JohnBMI);
if (MarkHigherBMI) {
  console.log(`Mark's BMI is higher than John's`);
} else {
  console.log(`John's BMI is higher than Mark's`);

  console.log("\n");

  var MarkBMI2 = BMI(Mark2.weight, Mark2.height);
  var JohnBMI2 = BMI(John2.weight, John2.height);
  var MarkHigherBMI2 = MarkBMI2 > JohnBMI2;

  console.log("Mark's BMI: " + MarkBMI2);
  console.log("John's BMI: " + JohnBMI2);
  if (MarkHigherBMI2) {
    console.log(
      `Mark's BMI is higher than John's`
    );
  } else {
    console.log(
      `John's BMI is higher than Mark's`
    );
  }
}
