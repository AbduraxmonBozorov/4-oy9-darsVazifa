// 1-masala
// function createArray(arg){
//     let array=[];
//     for(let i=0; i<arg; i++){
//         let item=+prompt("Massivga qiymat kiriting");
//         array.push(item);
//     }
//     return array;
// }
// console.log(createArray(5));

// 2-masala
// function arrayCreate() {
//   let array3 = [];
//   let count = 3;
//   for (let i = 0; i < count; i++) {
//     let a = +prompt("Massivga element kiriting");
//     array3.push(a);
//   }
//   array3.pop();
// let str=array3.join("");
//   return str;
// }
// console.log(arrayCreate());

// 3-masala
// function arrayCreate() {
//   let array3 = [];
//   let count = 4;
//   for (let i = 0; i < count; i++) {
//     let a = +prompt("Massivga element kiriting");
//     array3.unshift(a);
//   }
//   array3=array3.reverse();
//   return array3;
// }
// console.log(arrayCreate());

// 4-masala
// function arrayCreate() {
//   let array3 = [];
//   let count = 2;
//   for (let i = 0; i < count; i++) {
//     let a = +prompt("Massivga element kiriting");
//     array3.unshift(a);
//   }
//   array3.shift();
//   let str=array3.join(",")
//   return str;
// }
// console.log(arrayCreate());

// 5-masala
// function arrayCount(){
//     let arr=[10, 2, 4, 5, 6, 7, 8];
//     arr.pop();
//     let arrayCount=arr.length;
//     let firstItem=arr[0];
//     return {arrayCount, firstItem};
// }
// console.log(arrayCount());

// 6-masala
// function itemOfArray(){
//     let massiv=[];
//     let count=5;
//     for(let i=0; i<count; i++){
//         massiv.push(prompt("Massivga element qo'shish"));
//     }
//     let lastItem=massiv[massiv.length-1];
//     lastItem=lastItem.toString();
//     return lastItem;
// }
// console.log(itemOfArray());

// 7-masala
// function reverseArray(){
//     let arr=[];
//     let count=5;
//     for(let i=0; i<count; i++){
//         arr.unshift(prompt("Massivgaa element kiriting"));
//     }
//     arr=arr.reverse;
//     let ln=arr.length;
//     return ln;
// }
// console.log(reverseArray());

// 8-masala
// function arrayToString(){
//     let arr=[1, 2, 3, 4, 5];
//     arr.shift();
//     let ln=arr.length;
//     let str=arr.join('');
//     return {ln, str};
// }
// console.log(arrayToString());

// 9-masala
// function createArrayWithPushUnshift() {
//   let arr = [];
//   let count = 3;
//   let isPush = true;
//   for (let i = 0; i < count; i++) {
//     if (isPush) {
//       arr.push(prompt("Push bilan Massivga elelment kiriting"));
//       isPush = !isPush;
//     } else {
//       arr.unshift(prompt("Unshift bilan Massivga elelment kiriting"));
//       isPush = !isPush;
//     }
//   }
//   let ln=arr.length;
//   arr=arr.reverse();

//   return {ln, arr};
// }
// console.log(createArrayWithPushUnshift());

// 10-masala
// function deleteItemOfArray(){
//     let arr=[1, 2, 3, 4, 5];
//     arr.pop();
//     arr.shift();
//     let ln=arr.length;
//     arr=arr.reverse();
//     return {ln, arr};
// }
// console.log(deleteItemOfArray());

// 11-masala
// function stringFromArray(){
//     let arr=[1, 2, 3, "salom", true, 4, 5];
//     arr=arr.reverse();
//     let str=arr.toString();
//     let ln=str.length;
//     return ln;
// }
// console.log(stringFromArray());

// 12-masala
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8, 9];
// let arr3=arr1.concat(arr2);
// console.log(arr3);
// let arr4=[];

// arr3.forEach((item, index, arr)=>{
//     if(index % 2 ==1){
//         arr4.push(item)
//     }
// })
// console.log(arr4.length);




