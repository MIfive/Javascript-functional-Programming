// Sort array of object 

// var arr = [3, 6, 7, 33, 643, 4, 2, 356,];

//  arr.sort(function(a,b){
//      return b-a;
//  });

//  arr






// array of object 


var people =[
    {name:'Redwan', age:22},
    {name:'Pafin', age:35},
    {name:'Hamim', age:25},
    {name:'Kaif', age:32},
    {name:'Nafi', age:36},
    {name:'Sakib', age:18},
    {name:'Ragim', age:17}
]

people.sort(function(a,b){
    if (a.name> b.name){
        return 1;
    }
    else if (a.name < b.name){
        return -1;
    }else{
        return 0;
    }
});

console.log(people);




























