// Return a function from another function


// In javascript "function" is just a value.

function host(){
    console.log('I am host function');
    // return function(){
    //     console.log('I am child function');
    // }

    // we can do that without anonymous function

    function child(){
        console.log('I am child function');
    }

    return child;
}

// we call called parent function and child function this way
//host()();


// this another way to call parent & child function at a time.

var a= host();

a();



// New example

function greetings(msg){
    return function(name){
        console.log(msg+' ' +name);
    }
}

//method of calling return fuction 1.

// var good = gretings('Good mornig');
// var hello = gretings('Hello');

// good('Redwan');
// hello('World!');


// method of calling return function 2.

greetings('Hello')('World!');





