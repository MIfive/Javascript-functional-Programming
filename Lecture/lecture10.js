// ForEach function implementation


var arr = [5,36,6,7,4,6,78];

// arr.forEach(function(element,index,arr){
//     console.log('Element is: '+element+'  Index is: '+index+ ' Array is: '+arr);
    
// });


function loop(arr, callback){
    for(var i=0; i<arr.length; i++){
        callback(arr[i], i);
    }
}


loop(arr, function(element,i){
    console.log('Element is: '+element+ ' Index is: '+i);
    
});
