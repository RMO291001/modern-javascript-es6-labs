// console.log("Exercise - 1");
// {
//     // const username = "Ali";
//     let username = 'ALi';
//     username = "Sara";
//     console.log(username);
//     // Const variable cannot be modified. So, Let variable is to be used                  
    
//     let score = 0;
//     // let score = 100;
//     // let can not redeclare variables
//     score = 100;  
//     console.log(score)
    
//     const config = {
//       theme: "light",
//       lang:  "en"
//     };
//     // config = { theme: "dark", lang: "en" }; 
//     config.theme = "dark";
//     console.log(config);
//     // Const objects can not be modified. But, the properties inside an object can be modified 
    
    
//     if (true) {
//       let message = "Hello!";
//       const level = 5;
//       console.log(message);                 
//       console.log(level); 
//     } 
//     // Can not access Const and let variables outside of their scopes               
// } 

// console.log("Exercise - 2");
// {
//     // Version A — using var
//     for (var i = 0; i < 3; i++) {
//         (function(i){
//         setTimeout(() => console.log("var:", i), 100);
//         })(i);
//     }
//     // Fixed using an IIFE operator to Immedaitely print variable, before changing scope.
//     // In the previous code, the loop, iterated and updated completely before the first call back of the setTimeout
    

  
//   // Version B — using let
//   for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log("let:", j), 100);
//   }

//     // Here an IIFE is not needed, as let variable is block dependent.
//     //Thus, the whole setTimeout operation, is actually calling separate blocks, which are calling separte values of variable. 
// }

console.log("Exercise - 3");
{
    const TAX_RATE = 0.15;          // never changes
    const MAX_ITEMS = 10;            // store policy — fixed
    
    let cart = [];                 // will grow as items are added
    let itemCount = 0;             // updates on every add/remove
    
    function addItem(name, price) {
      if (itemCount >= MAX_ITEMS) {
        const msg = "Cart is full!";
        console.warn(msg);
        return;
      }
    
      const item = { name, price, id: Date.now() };
      cart.push(item);
      itemCount++;
    }
    
    function getTotal() {
      const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
      const tax      = subtotal * TAX_RATE;
      const total    = subtotal + tax;
    
      return { subtotal, tax, total };
    }
    
    function clearCart() {
      cart = [];          // is this line valid? Why or why not?
      // This line is valid because `cart` is declared with let,
      // which allows reassignment to a new array
      itemCount = 0;
    }
    //alternative if it were a const object
/* 
    function clearCart(){
        cart.length = 0; // Clears array without reassigning
        itemCount = 0; 
    }
*/

    addItem("Keyboard", 1200);
    addItem("Mouse",    650);
    
    const { subtotal, tax, total } = getTotal();  // what goes here?
    console.log(`Subtotal: ৳ ${subtotal.toFixed(2)}`);
    console.log(`Tax:      ৳ ${tax.toFixed(2)}`);
    console.log(`Total:    ৳ ${total.toFixed(2)}`);
}