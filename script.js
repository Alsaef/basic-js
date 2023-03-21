//integer number flojdat converd to integer
// var price= parseInt(1.19);
//  var price2 =parseInt(1.10);
//  var total= price+ price2;
//  document.getElementById("print").innerHTML = total;
//  console.log(total);

// float number: 1.0 3.14 this is float number

// javascrpt var type//

//  var roll = 10;
//  document.getElementById("print").innerHTML = typeof roll;
//  console.log(typeof roll);
//   var name = 'ratul';
//  document.getElementById("print").innerHTML = typeof name;
//  console.log(typeof name);
// var robel = true;
// document.getElementById("print").innerHTML = typeof robel;
// console.log(typeof robel);

// array.js

 //var cars = new Array('private car', 'bike', 'rr');
 //var friends = ['nahid','mijan','ataul'];
 //document.getElementById("print").innerHTML = friends.length;
// console.log(friends);

//.length count js array 

// array index.js value

// var book = ['bangla', 'english', 'math', 'cst']
// document.getElementById("print").innerHTML = book.indexOf('bangla');
// console.log(book.indexOf('math'));

//index of number value

// var bookPage = [10,20,30,40,50,60,70,80,90,100];
// document.getElementById("print").innerHTML = bookPage.indexOf(50);
// console.log(bookPage.indexOf(50));

// single index 

// var book = ['bangla', 'english', 'math', 'cst'];
// var Index =book[3];
// document.getElementById("print").innerHTML = Index;
//  console.log(Index);

// change index value 
// var booksPage = [10,20,30,40,50,60,70,80,90,100];
// booksPage[1] = 95;
// document.getElementById("print").innerHTML = booksPage;
// console.log(booksPage);

// push and pop
// push means add element
//  var banch = ['nahid','ataul','mijan'];
//  banch.push('ratul');
//  banch.push('saikat');
//  document.getElementById("print").innerHTML = banch;
//  console.log(banch);
//  var friendAge = [20,21,19,18];
//  friendAge.push(22);
//  document.getElementById("print").innerHTML = friendAge;
//  console.log(friendAge); 
 
//pop means remove element 

// var banch =['nahid','ataul','ratul','saikat','rokib','mijan'];
// banch.pop();
// document.getElementById("print").innerHTML =banch;
// console.log(banch);

//pop var lastitem
//var lastitems = banch.pop();
//document.getElementById("print").innerHTML =lastitems;
//console.log(lastitems);

//commprision js 

// var number = 5;
// var number2 =6;
// var trueNumber = (number<number2);
// var trueNumber = (number == number2);
// var trueNumber = (number == number2);
// var trueNumber = (number!=number2);
// document.getElementById("print").innerHTML =trueNumber ;
// console.log(trueNumber);

// && || condition 
// var number = 6;
// var number2 = 5;
//   var conditionNumber = (number&&number2);
//  var conditionNumber = (number||number2);
// document.getElementById("print").innerHTML = conditionNumber;
// console.log(conditionNumber);
// $$ count last item || count first item 

// conditional if else

// if food ready i will eat 
// if food is ready == true
// if (condition){

// }

//  var foodReady = true;
// if (foodReady == true){
//      document.getElementById("print").innerHTML = 'i will eat';
//      console.log('i will eat');
//  }

// var iphonePrice = 60000;
// var myBugget = 130000;
// if (iphonePrice<myBugget){
//     document.getElementById("print").innerHTML = 'buy i phone';
//     console.log('buy i phone');
// }
// var iphonePrice = 60000;
// var myBugget = 30000;
// if ( iphonePrice > myBugget){
//     document.getElementById("print").innerHTML = 'buy realme';
//      console.log('buy realme');
// }
// meanly if else 
// if (condition){
//     
// }
// else{

// }

//  var iphonePrice = 70000;
//  var myBugget = 40000;
//  if(iphonePrice<myBugget){
//     document.getElementById("print").innerHTML = 'buy i phone';
//      console.log('buy i phone');
//  }
//  else{
//      document.getElementById("print").innerHTML = 'buy oneplus';
//      console.log('buy oneplus');
//  }

//  if else date time on simple office open and close time 

//   var dateonday= new Date ().getHours();
//   var time;
//   if(dateonday < 10){
//       time = 'open';
//   }
//   else if (dateonday<17) {
//      time ='open';
//   } else {
//      time = 'close';
//   }
 
//   document.getElementById("print").innerHTML = time;
//   console.log(time);

// multiple conditions

//   var gotJob = true;
//   var saveMoney = 150000;
//   var needMoney = 200000;
//   var needHouse = true;
//   var biyeSombob;
//  if (gotJob==true&&saveMoney>needMoney) {
//      biyeSombob ='biye hoibo'; 
//  }
//  else{ biyeSombob = 'tor kopal e biye nai';
//  }
//  document.getElementById("print").innerHTML = biyeSombob;
// console.log(biyeSombob);

// if(gotJob==true||saveMoney>needMoney){
//     biyeSombob ='biye hoibo'; 
// }
// else{
//     biyeSombob = 'tor kopal e biye nai';
// }
// document.getElementById("print").innerHTML = biyeSombob;
// console.log(biyeSombob);

// if ((gotJob==true&&saveMoney >needMoney )||needHouse==true) {
//     biyeSombob='yes';
// }
// else{
//     biyeSombob='no';
// }
// document.getElementById("print").innerHTML = biyeSombob;
// console.log(biyaSombob);

// nested conditions

// var iPhonePrice = 70000;
// var oppoPrice = 50000;
// var samsungPrice = 40000;
// var myBugged = 30000;
// var buyPhone;

// if (iPhonePrice<myBugged) {
//     buyPhone = 'buy i phone';
// }
// else if(oppoPrice<myBugged){
//     buyPhone = 'buy oppo';
// }
// else if (samsungPrice<myBugged) {
//     buyPhone = 'buy samsung';
// } else {
//     buyPhone = 'nothing'
// }
// document.getElementById("print").innerHTML = buyPhone;
// console.log(buyPhone);

// conditions under conditions 

// var oppoPrice = 30000;
//  var myBugged = 40000;
//  var oppoQuality = false;
//  var allOf;
//  if (oppoPrice<myBugged) {
//  if (oppoQuality == true) {
//          allOf = 'i buy oppo';
//       }
//  else{
//           allOf = 'nothing buy oppo';
//       }
//    }
//    document.getElementById("print").innerHTML = allOf;
//    console.log(allOf);

// var number1 = 1;
// var number2 = 2;
// console.log(number1>number2);