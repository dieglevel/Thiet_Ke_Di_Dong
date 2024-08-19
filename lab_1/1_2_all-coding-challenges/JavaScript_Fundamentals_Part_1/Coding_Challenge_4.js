var bills = [275, 40, 430];
var tips = [];
var total = [];

for (var i = 0; i < bills.length; i++) {
    bills[i] >= 50 && bills[i] <= 300 ? tips.push(bills[i] * 0.15) : tips.push(bills[i] * 0.2);
    total.push(bills[i] + tips[i]);
}

for (var i = 0; i < bills.length; i++) {
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value was ${total[i]} \n`);
}