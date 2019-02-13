// Functional javasript 


// First class function


// Lecture2


function sayName(name){
    return 'Hello '+name;
}

//1. A function can be stored in a variable 


var hello =sayName;

var fun = sayName('Redwan');

console.log(hello);
console.log(fun);


var anotherHello=hello;
console.log(anotherHello('Rafiq'));




//2. A function can be stored in an Array

var arr=[1,3,5,anotherHello];
arr.push(hello);
console.log(arr);



//3.A function can be stored as an object field or Property

var person={
    name:'Redwan',
    sayname:hello,
    print:function(){
        console.log('Hi');
        
    }
}

console.log(person);


//4. We can function as needed

var sum = 30+ (function(){return 30})();  // self invoking function
sum;





//5. We can pass function as an argument 

function wow (name, fun){
    return fun(name);
}

var result = wow('Redwan', sayName);

console.log(result);




//6. We can return function from another function

function base(b){
    return function(p){
        var result =1;
        console.log(b,p);
        for(var i=0; i<p; i++){
  
            result*= b;
        }

        return result;
    }
}

// var power = base(5);
// var result1= power(2)

var result1= base(2)(5);

console.log(result1);



// this is a node-module by which we are able get user input in node js we have done this through npm install redline-sync command from git bash

var readline = require('readline-sync');

var a = parseInt( readline.question("Input a number: "));
var b = parseInt( readline.question("Input b number: "));


var sum = a+b;

console.log(a+b);


