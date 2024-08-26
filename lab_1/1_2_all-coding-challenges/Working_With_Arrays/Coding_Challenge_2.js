function calcAverageHumanAge(ages) {
  const humanAges = ages.map((age) =>
    age <= 2 ? 2 * age : 16 + age * 4
  );

  const adultDogs = humanAges.filter(
    (age) => age >= 18
  );

  const averageAge = adultDogs.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );

  return averageAge;
}


console.log(
  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
);
console.log(
  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
);
