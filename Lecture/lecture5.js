// Higher order function can take function as arguments and also return a function example follow below the example



function sayName(name){
    return 'Hello '+name;
}




//Higher order function takes "Function" as it's argument. 

function wow (name, fun){
    return fun(name);
}

var result = wow('Redwan', sayName);

console.log(result);






//Higher order function can return another "Function" 

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




var arr= [3,5,73,5,7];

// it's higher order function

//forech function is taking the "function(a)" as argument. 
// "function(a)" is also a anonymous function because it has no name.
arr.forEach(function(a){
    console.log(a);
    
});

// above forEach function can be written this way too.

function cbf(a){
    console.log(a);
    
}
 
arr.forEach(cbf);



// function return function


function caller(){
    return function(name){
        return 'Caller Calling You '+name;
    }
}

var x=caller();

var y= x('Redwan');

console.log(y);


// if a function has inner function then we can pass parameter as argument for inner function by this way.

var a= caller()('RAHI');
console.log(a);
;







 









