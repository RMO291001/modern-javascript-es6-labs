# Lab 01 — Let and Const

**Course:** Modern JavaScript: ES6 and Beyond  
**Timestamp:** [01:15](https://youtu.be/yyrq_8-bk0s?t=75)  
**Status:** Complete  

---

## Objectives

By the end of this lab, I should be able to:

- Explain the difference between `var`, `let`, and `const`
- Understand block scoping versus function scoping
- Identify when to use `let` versus `const` in practice
- Recognize common pitfalls such as hoisting and temporal dead zone

---

## Theory

### The Problem with `var`

Before ES6, `var` was the only way to declare variables in JavaScript. It has two significant issues that lead to bugs in larger codebases.

**1. Function scoping, not block scoping**

`var` is scoped to the nearest function, not to the nearest block `{}`. This means variables declared inside loops or conditionals leak out into the surrounding function.

**2. Hoisting with `undefined`**

Variables declared with `var` are hoisted to the top of their function scope and initialized with `undefined`. This allows a variable to be referenced before its declaration line without throwing an error, which masks mistakes.

---

### `let`

Introduced in ES6, `let` is block-scoped. A variable declared with `let` only exists within the `{}` block it was declared in.

Key characteristics:

- Scoped to the nearest enclosing block `{}`
- Can be updated (reassigned) after declaration
- Cannot be re-declared in the same scope
- Is hoisted but not initialized — accessing it before declaration throws a `ReferenceError` (temporal dead zone)

Use `let` when the value of a variable needs to change over time, such as a counter in a loop or a value being built up conditionally.

---

### `const`

`const` is also block-scoped and shares the same temporal dead zone behavior as `let`. The key distinction is that a `const` binding cannot be reassigned after its initial declaration.

Key characteristics:

- Scoped to the nearest enclosing block `{}`
- Cannot be reassigned after declaration
- Must be initialized at the point of declaration
- For objects and arrays, the binding is constant but the contents can still be mutated

`const` does not mean the value is immutable. It means the variable identifier cannot be pointed to a different value. An object declared with `const` can still have its properties modified.

---

### Decision Rule

> Default to `const`. Use `let` only when you know the variable will need to be reassigned. Avoid `var` entirely in modern JavaScript.

This approach makes code easier to reason about — a `const` declaration signals to any reader that this value will not change throughout its scope.

---

## Key Concepts

| Concept | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Reassignable | Yes | Yes | No |
| Re-declarable | Yes | No | No |
| Hoisted | Yes (as `undefined`) | Yes (TDZ) | Yes (TDZ) |
| Must initialize | No | No | Yes |

TDZ = Temporal Dead Zone — the variable exists in scope but cannot be accessed before its declaration line.

---

## Code Examples

Annotated examples are in [`examples.js`](./examples.js).

Topics covered in the examples file:

- `var` scoping leak inside a `for` loop
- `let` correctly scoped inside a block
- `const` preventing reassignment
- `const` with an object — mutating properties vs reassigning the binding
- Temporal dead zone demonstration

---

## Practice Problems

Problems are listed in [`practice/problems.md`](./practice/problems.md).  
My solutions are in [`practice/solutions.js`](./practice/solutions.js).

**Problems in this lab:**

1. Identify and fix a scoping bug caused by `var` in a loop with `setTimeout`
2. Refactor a legacy function that uses `var` throughout, replacing with `let` or `const` appropriately
3. Predict the output of a code snippet involving the temporal dead zone
4. Explain why a `const` object can have its properties changed, and write an example that demonstrates this

---

## Personal Notes

> Write your own observations, things that confused you initially, or connections you made to other concepts here. This section is for insights that are not in the tutorial — your own thinking.

Example entries:

- The `var` loop bug with `setTimeout` finally made closures click for me. Each iteration of a `let` loop creates a new binding, so each callback captures a different `i`.
- I initially thought `const` meant the value could never change. The distinction between the binding and the value itself (especially for objects) was an important correction.

---

## Common Mistakes

**Mistake 1 — Assuming `const` makes objects immutable**

```javascript
const user = { name: "Alice" };
user.name = "Bob"; // This works — the object is mutated, not reassigned
user = {};         // This throws a TypeError — reassignment is not allowed
```

**Mistake 2 — Using `var` in loops expecting block scope**

```javascript
// Problematic: all callbacks log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Correct: each callback logs its own i
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Mistake 3 — Accessing a `let` or `const` variable before its declaration**

```javascript
console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "Alice";
```

---

## References

- [MDN — let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN — const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN — var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN — Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

## Navigation

[Back to Main README](../README.md) | Next: [Lab 02 — Template Strings](../02-template-strings/README.md)