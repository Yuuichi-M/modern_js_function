/**
 * const, letなどの変数制限
 */

// //従来 var変数
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再制限可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// //let変数
// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// //const変数
// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";

// //const変数は再宣言不可
// const val3 = "const変数を再宣言";

// //constで定義したオブジェクトはプロパティの上書き可能
// const val4 = {
//   name: "ゆういち",
//   age: 32
// };
// val4.name = "Yuuichi";
// val4.address = "Hirosima";
// console.log(val4);

// //constで定義した配列はプロパティの変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkye");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "Yuuichi";
// const age = 28;

// //「私の名前はYuuichiです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 *
 * アロー関数 =>
 */

//

/**
 * 分割代入
 */

// //従来
// const myProfile = {
//   name: "Yuuichi",
//   age: "32"
// };

// const message1 = `名前${myProfile.name}。年齢${myProfile.age}歳`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前${name}。年齢${age}歳`;
// console.log(message2);

// //分割代入
// const myProfile = ["Yuuichi", 32];

// const message3 = `名前${myProfile[0]}。年齢${myProfile[1]}歳`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前${name}。年齢${age}歳`;
// console.log(message4);

/**
 * デフォルト値,引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello();

// /** こんにちは!ゲストさん! */

/**
 * スプレッド構文
 */
//配列の展開
//(...)で配列の中身を順番に処理する
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

// /**
// (2) [1, 2]
// 1 2
//  */

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

/**
3
3
 */

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
/**
 1
 2
 [3,4,5]
 */

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

/**
(2) [100, 20]
(2) [10, 20]
  */

const arr7 = [...arr4, ...arr5];
console.log(arr7);

/** (4) [10, 20, 30, 40]*/
