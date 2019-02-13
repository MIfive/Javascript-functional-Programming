// Call back function


// Functional programming has two concept 1.Callback function 2. Return Function



// function hello(name){
//     print(name);
//     print('Something Else');
// }

// function print(a){
//     console.log(a);
    
// }

// hello('Redwan');




// new example 

// First argument (name) of the call back function is constant and 
//2nd argument of the function is dynamic(print "function") 



// function hello1(name, print){
//      print(name);
    
// }





// anonymous function is just an argument of "hello1" funciton.
//we can create multiple anonymous function as argument when ...
//calling the function.








// hello1('Redwan', function(name){ 
//      console.log('Hello, '+name);
    
// });



// hello1('Redwan', function(name){
//     console.log('Hi, How are you? '+ name);
    
// });

// hello1('Redwan', function(name){
//     console.log('Lenght of '+name +' is = '+name.length);
    
// })



// callback function example



// var me={
//     name:'Redwan',
//     age:22,
//     email:'rk124@gmail.com'
// }

// function printMySelf(person,callback){
//     console.log('Person: '+person.name +' ('+person.age+')');

//     if(person.age>18){
//         callback(person.email);
//     }else{
//         console.log('YOu are too little.');
        
//     }   
// }


// printMySelf(me, function(email){
//     console.log('Email sent to '+email);
    
// });






// Multiple callback function in a single function as function argument.


function printIt(text,callback1,callback2){
    console.log('Original Text is: '+text);
    callback1(text);
    callback2(text);
}

printIt('Hello World!', function(data){
    console.log(data.toUpperCase());
    
},function(data){
    console.log(data.toLowerCase());
    
});
























 