var x= "Hello World";
var x = "This is JavaScript";
const bool = true;
const let_bool = true
console.log(x);
// The variable is redeclared.

if(let_bool){
    let c = "Hello World using Let"; // It is declared within the block. It will not work outside of the block
    // let c = "This is JavaScript";  // Can not redeclare.
    console.log(c);
    c = "This is JavaScript"; // Can reassign the values
    console.log(c); 
}
// console.log(c);  //This line throws an referrence error, as c is not defined within this scope

if(bool){
    const d = "Hello World using const"; // It is declared within the block. It will not work outside of the block
    // const d = "This is JavaScript";  // Can not redeclare.
    console.log(d);
    /*      
            d = "This is JavaScript"; // Can not reassign the values that are declared using const
            console.log(d);  
    */
}
// console.log(c);  //This line throws an referrence error, as c is not defined within this scope