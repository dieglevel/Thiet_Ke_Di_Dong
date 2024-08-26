var values = [
    "Phung Anh Minh",
    "Nguyen Tan Loc",
    "Lai Duong Minh Hieu",
    "Tran Thi Thuy Vy",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
];

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i]);
    }

    return this;
};

console.log(
    values.myForEach((item) => {
        return item + 3;
    })
);
