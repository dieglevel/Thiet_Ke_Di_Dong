var data = [125, 555, 44];
var tips = [];
var total = [];

for (var i = 0; i < data.length; i++) {
    data[i] >= 50 && data[i] <= 300 ? tips.push(data[i] * 0.15) : tips.push(data[i] * 0.2);
    total.push(data[i] + tips[i]);
}

for (var i = 0; i < data.length; i++) {
    console.log(`The bill was ${data[i]}, the tip was ${tips[i]}, and the total value was ${total[i]}`);
}
