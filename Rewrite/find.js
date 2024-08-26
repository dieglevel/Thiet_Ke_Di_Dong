var values = [
  "Phung Anh Minh",
  "Nguyen Tan Loc",
  "Lai Duong Minh Hieu",
  "Tran Thi Thuy Vy",
];
// Trả về phần tử đầu tiên
Array.prototype.myFind = function (callback)  {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      return this[i]
    }

  }

  return undefined;
};

var res = values.myFind((item) => {
  return item === "Phung Anh Minh";
});

console.log(res);

var res2 = values.myFind((item) => {
    return item === "Adu"
})

console.log(res2)