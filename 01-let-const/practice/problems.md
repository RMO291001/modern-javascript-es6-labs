# Exercise 1 — Spot & Fix the Bugs (Beginner)

**Goal**: Understand the rules of reassignment, redeclaration, and block scope by identifying what breaks and why.

The following code has 5 bugs. Find them all, explain what each error is, and fix the code.
```javascript
const username = "Ali";
username = "Sara";                    

let score = 0;
let score = 100;                      

const config = {
  theme: "light",
  lang:  "en"
};
config = { theme: "dark", lang: "en" }; 

if (true) {
  let message = "Hello!";
  const level = 5;
}
console.log(message);                 
console.log(level);
```

What to explain for each bug:

What type of error it throws (TypeError, SyntaxError, ReferenceError)
Why the rule exists — not just that it's broken

Bonus: Bug 3 is a trick — there's a correct way to update config's contents without breaking the const rule. Write that fix.

# Exercise 2 — The Loop Closure Problem (Intermediate)
**Goal**: Understand one of the most famous real-world bugs caused by var vs let.

Run this code mentally (or in a browser console) and predict the output:
```javascript
// Version A — using var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100);
}

// Version B — using let
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 100);
}
```

**Tasks:**
1. Write down the expected output of Version A *before* running it.
2. Write down the expected output of Version B
3. Explain in 2–3 sentences *why* they produce different results — the answer comes down to scope and when the variable is captured by the arrow function

**Expected outputs to check yourself against:**
```
var: 3    // prints three times
var: 3
var: 3

let: 0    // prints correctly
let: 1
let: 2
```

**Bonus**: Fix Version A without changing var to let — use an IIFE (Immediately Invoked Function Expression) to capture i at each iteration.

# Exercise 3 — Shopping Cart Manager (Intermediate–Advanced)
**Goal**: Apply let and const correctly in a realistic mini-application, making deliberate decisions about which to use and why.
Task: Build a shopping cart system using the skeleton below. Fill in every ??? with either let or const — and be ready to justify each choice.

```javascript
??? TAX_RATE = 0.15;          // never changes
??? MAX_ITEMS = 10;            // store policy — fixed

??? cart = [];                 // will grow as items are added
??? itemCount = 0;             // updates on every add/remove

function addItem(name, price) {
  if (itemCount >= MAX_ITEMS) {
    ??? msg = "Cart is full!";
    console.warn(msg);
    return;
  }

  ??? item = { name, price, id: Date.now() };
  cart.push(item);
  itemCount++;
}

function getTotal() {
  ??? subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  ??? tax      = subtotal * TAX_RATE;
  ??? total    = subtotal + tax;

  return { subtotal, tax, total };
}

function clearCart() {
  cart = [];          // is this line valid? Why or why not?
  itemCount = 0;
}

addItem("Keyboard", 1200);
addItem("Mouse",    650);

??? { subtotal, tax, total } = getTotal();  // what goes here?
console.log(`Subtotal: ৳${subtotal.toFixed(2)}`);
console.log(`Tax:      ৳${tax.toFixed(2)}`);
console.log(`Total:    ৳${total.toFixed(2)}`);
```

Questions to answer alongside your solution:

- In getTotal(), should subtotal, tax, and total be let or const? They're computed once and never reassigned inside the function — does that change your answer?

- The clearCart() function tries to reassign cart = []. Will this work depending on what you chose for cart? What's the alternative approach that works with const?

- What keyword goes before the destructuring line at the bottom — and why?