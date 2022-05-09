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
//

/**
mapやfilterを使った処理
 */

// //従来
// const nameArr = ["田中", "山田", "雄一"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// /**
// 1番目は田中です
// 2番目は山田です
// 3番目は雄一です
// */

// //map 配列の値を順番に処理する

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// /**
//   (3) ["田中", "山田", "雄一"]
//   */

// // 短く書ける
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// /**
// 1番目は田中です
// 2番目は山田です
// 3番目は雄一です
//  */

// //filter ある条件と一致したものだけ抽出する

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //奇数の値を抽出
// });
// console.log(newNumArr);

// /**
// (3) [1, 3, 5]
//  */

// //mapの実践例
// //雄一以外の名前に`さん`をつける
// const newNameAll = nameArr.map((name) => {
//   if (name === "雄一") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameAll);

// /**
// 3) ["田中さん", "山田さん", "雄一"]
//  */

/**
三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時;
// const vail1 = 1 > 0 ? "trueです" : "falseです";
// console.log(vail1);

// 実践的;
// toLocaleString(三桁カンマ区切りにして描画);
// const num = "1300";
// console.log(num.toLocaleString());

// /**
//  * 1,300
//  */

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// /**
//  * 数値を入力してください
//  */

// const checksum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checksum(50, 40));

// /**
//  * 許容範囲内です
//  */

/***
 * 論理演算子の本当の意味を知ろう
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}

if (flag1 && flag2) {
  console.log("1か2もtrueになります");
}

// ||　は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

/**
 * 金額未設定です
 */

// &&　左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

/**
 * 何か設定されました
 */
