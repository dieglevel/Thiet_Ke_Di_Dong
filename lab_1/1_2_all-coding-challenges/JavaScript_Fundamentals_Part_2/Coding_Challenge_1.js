var data1 = {
    Dolphins: [44, 23, 71],
    Koalas: [65, 54, 49],
}
var data2 ={
    Dolphins: [85, 54, 41],
    Koalas: [23, 34, 27],
}

// Arraow function
const calcAverage = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function checkWinner (data) {
    const avgDolphins = calcAverage(data.Dolphins);
    const avgKoalas = calcAverage(data.Koalas);

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

console.log("Data 1:");
checkWinner(data1);

console.log("Data 2:");
checkWinner(data2);