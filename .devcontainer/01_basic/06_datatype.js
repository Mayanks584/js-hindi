// today we study about two type of datatype 
// primitive datatype = call by value

// 7 types : string,number,boolearn,null,undefined,symbol(use to make a value unique),bigInt

// reference type = non primitive

// array , objects ,functions

//  javascript is a not a defined langauge  dynamically typed beause 
// You don't need to declare the data type of a variable explicitly.
// The type of a variable is determined at runtime based on the value assigned to it. 
const score = 100;
console.log(score);
// 100.3 is also a number there is not a float value 
const temp = null;
let accountEmail;
console.log(accountEmail)
//  symbols create it by a unquie name (marzi hai apni)
const id = Symbol('1234')
const anotherid = Symbol('mayank')
console.log(id == anotherid)
//  use n in the end of bigInt 
const number = 34445765432454678434345676n
console.log(number)
// non perimitive
const heros = ["shaktiman" , "mayank" , "doga"];// use this bracket in arrays 
//  this is who object is written 
let myobj ={
    name:"histesh",
    age: 22,
}
//  this is function (ab hum variable wala trika sikhege)
 const myfuntion =function(){
    console.log("hello world")
 }
//  hwo to find the datatype of the value
console.log(typeof myfuntion); // tthis is function object 
//  null is a object 
