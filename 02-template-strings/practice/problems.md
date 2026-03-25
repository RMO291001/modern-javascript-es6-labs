# Exercise 1 — User Profile Card (Beginner)
**Goal**: Replace messy string concatenation with clean template literals.

Task: You have these variables. Build a formatted profile string using template strings only — no + concatenation allowed.

```javascript 
const firstName = "Sara";
const lastName  = "Ahmed";
const age       = 24;
const city      = "Dhaka";
const isPremium = true;
```

**Expected output:**
```
Name: Sara Ahmed
Age:  24
City: Dhaka
Account: Premium ✓
```

*Hints*:

Use a multi-line template string (no \n characters)
Embed a ternary expression for the Premium/Free status: ${isPremium ? "Premium ✓" : "Free"}


# Exercise 2 — HTML Generator (Intermediate)
*Goal*: Use template strings inside a function to dynamically build HTML.

Task: Write a function renderProductCard(product) that takes an object and returns an HTML string.
```javascript
const product = {
  name:     "Wireless Headphones",
  price:    2499,
  stock:    3,
  discount: 10   // percent
};
```
Expected output (the returned string):
```html
<div class="card">
  <h2>Wireless Headphones</h2>
  <p class="price">৳2249.10 <span>(10% off)</span></p>
  <p class="stock">Only 3 left!</p>
</div>
```
Hints:

Calculate the discounted price inside the template: ${(price * (1 - discount/100)).toFixed(2)}
Conditionally show a "In Stock" vs "Only N left!" message using a ternary


# Exercise 3 — Tagged Template (Advanced)
**Goal**: Build a custom tagged template that automatically sanitizes user input to prevent XSS (a real-world security use case).

Task: Create a tag function called safe that escapes any <, >, and & characters in the interpolated values only (not the static string parts). Then use it to render untrusted user input safely.
```javascript
const userInput = "<script>alert('hacked!')</script>";
const username  = "Alice & Bob";

const output = safe`<p>Welcome, ${username}!</p><p>Comment: ${userInput}</p>`;
console.log(output);
```
Expected output:
```html
<p>Welcome, Alice &amp; Bob!</p><p>Comment: &lt;script&gt;alert('hacked!')&lt;/script&gt;</p>
```
*Hint — tagged template structure:*

```javascript
function safe(strings, ...values) 
{
  // strings = the static parts array
  // values  = the interpolated expressions
  // Escape values, then weave strings + escaped values back together
  const escape = str => str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return strings.reduce((result, str, i) => {
    return result + str + (values[i] !== undefined ? escape(String(values[i])) : "");
  }, "");
}
```