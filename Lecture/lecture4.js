// Return statement 

// function fullName(fName,lName,gender){
//     var output;

//     if(gender==='Male'){
//         output = 'Mr. '+ fName +' '+ lName;
//     }

//     else if(gender==='Female'){
//         output = 'Ms. '+ fName +' '+ lName;
//     }

//     return output;
// }

// // What can we return from a function? ans:anything


// console.log(fullName('Raima', 'Khan', 'Female'));










function example() {
    return {
        name:'Redwan',
        skill: ['Front','BackendWeb'],
        print: function(){
            console.log(this.name,this.skill);
            
            
        }
    }
}

var obj = example();
obj.print();













