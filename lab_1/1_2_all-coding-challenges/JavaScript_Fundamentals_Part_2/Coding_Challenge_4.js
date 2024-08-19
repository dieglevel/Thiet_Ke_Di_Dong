var data = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

var tips = [];
var total = [];

for (var i = 0; i < data.length; i++) {
    tips.push(calcTip(data[i]));
    total.push(data[i] + tips[i]);
}

console.log(tips);
console.log(total);
