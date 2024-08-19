var data1 = {
    Dolphins: [96, 108, 89],
    Koalas: [88, 91, 110],
}

var dataBonus1 ={
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 123],
}

var dataBonus2 = {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 106],
}

function averageScore(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function compareAverageScore(scores1, scores2) {
  const averageScore1 = averageScore(scores1);
  const averageScore2 = averageScore(scores2);
  const averageScore1Higher =
    averageScore1 > averageScore2;

  if (
    averageScore1Higher &&
    averageScore1 >= 100
  ) {
    console.log(
      `Dolphins win with an average score of ${averageScore1}`
    );
  } else if (
    averageScore2 > averageScore1 &&
    averageScore2 >= 100
  ) {
    console.log(
      `Koalas win with an average score of ${averageScore2}`
    );
  } else if (
    averageScore1 === averageScore2 &&
    averageScore1 >= 100 &&
    averageScore2 >= 100
  ) {
    console.log(
      `It's a draw with an average score of ${averageScore1}`
    );
  } else {
    console.log(`No team wins the trophy`);
  }
}

console.log("Data 1:");
compareAverageScore(data1.Dolphins, data1.Koalas);

console.log("Data Bonus 1:");
compareAverageScore(dataBonus1.Dolphins, dataBonus1.Koalas);

console.log("Data Bonus 2:");
compareAverageScore(dataBonus2.Dolphins, dataBonus2.Koalas);
