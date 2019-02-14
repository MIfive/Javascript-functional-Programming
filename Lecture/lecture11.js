//filter function implementation 

var arr = [5,36,6,7,4,6,78];

//normal way 


// var newArr = [];

// for(var i = 0; i<arr.length; i++){
//     if(arr[i]%2 !=0){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);


//using filter function

// var newarr = arr.filter(function(value){
//     return value % 2 != 0;
// });

// console.log('New array is: '+newarr);


//Own created filter funciton

function myFilter(arr, callback){

    var newarR = [];
    for(var i=0; i<arr.length; i++){
        if (callback(arr[i])){
            newarR.push(arr[i]);
        }
        
    }

    return newarR;
}


var myArr = myFilter(arr,function(element){
    return element % 2 !=0;
});

console.log('New array is: '+ myArr);
















































