const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
    dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
});

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahDog) {
    const recommendedFood = sarahDog.recommendedFood;
    if (sarahDog.curFood < recommendedFood) {
        console.log("Sarah's dog is eating too little.");
    } else if (sarahDog.curFood > recommendedFood) {
        console.log("Sarah's dog is eating too much.");
    } else {
        console.log("Sarah's dog is eating the recommended amount.");
    }
}

const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

const isEatingRecommendedAmount = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`Any dog eating the recommended amount? ${isEatingRecommendedAmount}`);

const isEatingOkayAmount = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(`Any dog eating an okay amount? ${isEatingOkayAmount}`);

const dogsEatingOkayAmount = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);

const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);