//Map function implementation

var arr = [5,36,6,7,4,6,78];

// var mapedarr =[];

// for(var i= 0; i<arr.length; i++){
//     mapedarr.push(arr[i]+100);
// }

// console.log('Maped Arr :'+mapedarr);


// map function used for change data of an array and create a new array

// var newArr = arr.map(function(value){
//     return value +200;
// }); 

// console.log('New array is: '+newArr);





// creating a new map function.



function myMap(arr, callback){
    var newArr = [];

    for(var i=0; i<arr.length; i++){
        var data = callback(arr[i]);
        newArr.push(data);        
        //newArr.push(callback(arr[i]));
    }

    return newArr;
}


var myArr = myMap(arr,function(value){
    return value +200;
});

console.log('New array is: '+myArr);





