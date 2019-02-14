// Reduce function implementation


var arr = [5,36,6,7,4,6,78];

// normal way to sum of an array

// sum=0;

// for(var i=0; i<arr.length; i++){
//     sum+=arr[i];
// }

// console.log(sum);


//Using reduce method to sum of an array

var result = arr.reduce(function(a,b){
    return a+b;
});

console.log(result);








