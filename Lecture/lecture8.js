//Postmortem of closure.

// scope er baire theke je data ase take closure bole example below

var name = 'Redwan';

 function sayName(){
     console.log('Hello '+name);

     //{---} is a scope
 }


 sayName();

/*
here name variable is a global variable and we have used this
variable in sayName function so name variable is a closure for
sayName function 
 */



 function greetings(msg){
     return function(name){
         console.log(msg+' '+name);

         /*here msg is a closure because msg did not declare inside the 
         anonymous function .it has declared in greetings function.
         */
         
     }
 }

 greetings('Hellow')('World!');
