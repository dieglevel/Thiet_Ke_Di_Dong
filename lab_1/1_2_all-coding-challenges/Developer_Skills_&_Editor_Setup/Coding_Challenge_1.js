var data1 = [17, 21, 23];
var data2 = [12, 5, 5, 0, 4];

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `... ${arr[i]}°C in ${i + 1} days`
    );
  }
}

printForecast(data1);
console.log("\n");
printForecast(data2);