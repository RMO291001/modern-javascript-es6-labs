# Lab 02 — Template Strings

**Course:** Modern JavaScript: ES6 and Beyond  
**Timestamp:** [10:33](https://youtu.be/yyrq_8-bk0s?t=633)  
**Status:** Complete  

---

## Objectives

By the end of this lab, I should be able to:

- Explain what template literals are and how they differ from regular strings
- Use string interpolation to embed variables and expressions inside strings
- Write clean multi-line strings without escape characters
- Understand what tagged templates are and where they appear in real-world libraries
- Use `String.raw` to work with raw string content

---

## Theory

### The Problem with String Concatenation

Before ES6, building strings that included variable values required concatenating pieces together using the `+` operator. This approach works, but it degrades quickly in real-world code.

**1. Hard to read and easy to misformat**

Once a string involves more than one or two variables, concatenation becomes cluttered. Each variable must be manually surrounded by `+` operators and quotation marks, and forgetting a space or a quote is a common source of subtle bugs.

**2. Multi-line strings are awkward**

To represent a string that spans multiple lines, the old approach required either embedding `\n` escape sequences at the end of each line or connecting multiple string segments with `+` across multiple lines. Neither option produces code that is easy to scan.

**3. Expressions require extra ceremony**

Including the result of a calculation or a function call inside a string means breaking out of the string, performing the operation, and joining the result back in. The intent of the string gets buried in the mechanics of building it.

---

### Template Literals

ES6 introduced template literals as a direct solution to all of these problems. A template literal uses **backticks** instead of single or double quotes. Inside backticks, you can embed any JavaScript expression using the `${}` syntax, write strings across multiple lines naturally, and keep the overall structure of the string visible at a glance.

The shift is not just cosmetic. Template literals change how you think about strings — instead of assembling pieces, you write the string as it should appear and drop values in where they belong.

---

### Interpolation with `${}`

The `${}` placeholder is the core feature of template literals. Anything placed inside the curly braces is evaluated as a JavaScript expression and its result is coerced to a string and inserted at that position.

Key characteristics:

- Accepts any valid JavaScript expression — variables, arithmetic, ternary operators, function calls, method calls, or even another template literal
- The expression is evaluated at the time the template literal is encountered, not deferred
- The result is automatically converted to a string, so no manual casting is needed

This means `${}` is not limited to simple variable names. You can perform logic directly inside the placeholder, which keeps related operations close together in code.

---

### Multi-line Strings

A template literal preserves all whitespace and line breaks that appear between its backticks. Writing a string across multiple lines in source code produces a string with actual newline characters in the output — no `\n` required.

Key characteristics:

- Line breaks in source become real newlines in the string
- Leading whitespace on each line is also preserved, so indentation matters
- There is no need for concatenation or escape sequences to span multiple lines

This feature is especially useful when building HTML fragments, SQL queries, or any block of text that has natural line structure.

---

### Tagged Templates

A tagged template is an advanced use of template literals where a function is placed directly before the opening backtick. That function — called the tag — receives the raw string parts and the evaluated expression values as separate arguments. It can then combine them in any way it chooses and return any value, not necessarily a string.

Key characteristics:

- The tag function receives an array of string segments as its first argument
- Each interpolated value is passed as a subsequent argument (or collected with rest syntax)
- The tag controls how the final output is assembled — it can sanitize values, apply formatting, or do something else entirely
- Tagged templates are the mechanism behind `styled-components`, `graphql-tag`, and similar libraries

You will not write tagged templates often in day-to-day application code, but recognizing the syntax is important because it appears frequently in popular tooling.

---

### `String.raw`

`String.raw` is a built-in tag provided by JavaScript itself. When used as a tag, it returns the raw content of the template literal — escape sequences like `\n` or `\t` are not processed, they appear as literal backslash-n and backslash-t characters in the output.

This is useful in situations where you need to work with strings that contain backslashes, such as Windows file paths or regular expression patterns, and you do not want JavaScript to interpret those backslashes as escape sequences.

---

## Key Concepts

| Concept | Description |
|---------|-------------|
| Backticks | Delimiter for template literals — replaces single and double quotes |
| `${}` interpolation | Embeds any JavaScript expression directly into the string |
| Multi-line | Line breaks in source are preserved in the output string |
| Tagged templates | A function placed before a template literal that controls how it is processed |
| `String.raw` | A built-in tag that returns the string with escape sequences left unprocessed |
| Expression evaluation | The content of `${}` is evaluated at runtime — not deferred |

---

## Code Examples

Annotated examples are in [`examples.js`](./examples.js).

Topics covered in the examples file:

- Rewriting a concatenated string using a template literal
- Embedding arithmetic and ternary expressions inside `${}`
- Calling a function directly inside a placeholder
- Writing a multi-line HTML fragment with a template literal
- Demonstrating whitespace preservation in multi-line strings
- A basic tagged template function that wraps interpolated values
- Using `String.raw` to prevent escape sequence processing

---

## Practice Problems

Problems are listed in [`practice/problems.md`](./practice/problems.md).  
My solutions are in [`practice/solutions.js`](./practice/solutions.js).

**Problems in this lab:**

1. Rewrite a function that builds a greeting string using concatenation — convert it to use a template literal
2. Build a multi-line HTML card string using interpolation to fill in name, role, and email fields
3. Write a template literal that conditionally includes a suffix in a message based on a boolean variable
4. Implement a tagged template called `sanitize` that escapes `<` and `>` characters in any interpolated value to prevent basic HTML injection

---

## Personal Notes

> Write your own observations, things that confused you initially, or connections you made to other concepts here. This section is for insights that are not in the tutorial — your own thinking.

Example entries:

- I initially assumed `${}` only accepted variable names. Realizing that any expression works — including conditionals and function calls — made template literals feel much more powerful than I expected.
- The whitespace preservation behavior in multi-line strings caught me off guard. If I indent the content of a template literal for readability, that indentation becomes part of the string. I need to be deliberate about where the text actually starts.
- Tagged templates made more sense once I stopped trying to memorize the syntax and instead looked at an example from `styled-components`. Seeing a real use case made the mechanics click.

---

## Common Mistakes

**Mistake 1 — Using quotes instead of backticks**

```javascript
// This is just a regular string — interpolation does not work
const name = "Alice";
const greeting = "Hello, ${name}!";
console.log(greeting); // → "Hello, ${name}!"

// Backticks are required for template literals
const greeting = `Hello, ${name}!`;
console.log(greeting); // → "Hello, Alice!"
```

**Mistake 2 — Forgetting that whitespace inside backticks is part of the string**

```javascript
function getAddress() {
  return `
    123 Main Street
    Dhaka, Bangladesh
  `;
}

// The returned string starts with a newline and has leading spaces on each line.
// If you are using this string in a context where that whitespace matters,
// you may need to call .trim() on it or adjust the indentation.
console.log(getAddress().trim());
```

**Mistake 3 — Putting statements instead of expressions inside `${}`**

```javascript
const score = 85;

// This does not work — if/else is a statement, not an expression
const result = `Grade: ${if (score >= 90) { "A" } else { "B" }}`;

// Use a ternary expression instead — it returns a value
const result = `Grade: ${score >= 90 ? "A" : "B"}`;
console.log(result); // → "Grade: B"
```

**Mistake 4 — Assuming `String.raw` removes all processing**

```javascript
// String.raw only prevents escape sequence processing.
// Interpolation still works normally inside it.
const name = "Alice";
console.log(String.raw`Hello\n${name}`);
// → "Hello\nAlice"   (the \n is raw, but ${name} is still evaluated)
```

---

## References

- [MDN — Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN — String.raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
- [javascript.info — Strings](https://javascript.info/string)

---

## Navigation

[Back to Main README](../README.md) | Previous: [Lab 01 — Let and Const](../01-let-const/README.md) | Next: [Lab 03 — Arrow Functions](../03-arrow-functions/README.md)