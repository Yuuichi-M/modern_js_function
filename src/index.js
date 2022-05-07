/**
 * const, letなどの変数制限
 */

//従来 var変数
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再制限可能
var val1 = "var変数を再宣言";
console.log(val1);

//let変数
let val2 = "let変数";
console.log(val2);

//letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

//letは再宣言不可能
let val2 = "let変数を再宣言";

//const変数
const val3 = "const変数";
console.log(val3);

//const変数は上書き不可
val3 = "const変数を上書き";

//const変数は再宣言不可
const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの上書き可能
const val4 = {
  name: "ゆういち",
  age: 32
};
val4.name = "Yuuichi";
val4.address = "Hirosima";
console.log(val4);

//constで定義した配列はプロパティの変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkye");
console.log(val5);
