
// inner function is 
// when you declare a function inside a function which is called inner 
// function or nested function 



// inner function and outer function

// inner function can access everything of outer function.
// But outer function can not access anything of inner function.



// function outer(){
//     function inner(){
//         console.log('I am inner function');
  
//     }
//     inner();

//     console.log('I am Outer function');
// }

// outer();


function tSum(a,b){
    function sum(){
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function mul(){
        return a*b;
    }
    function div(){
        return a/b;
    }

    return sum()+ sub()+mul()+div();
}

console.log(tSum(10,5));














