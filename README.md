# JS-INTERVIEW-PREP-2026

01 var -
 Prefer not  to used var  for variable declaration
Because var is function scoped and it create problem in block scope
issue in block scope and function scope

We avoid var because it has function scope, allows re-declaration, and causes unexpected bugs due to hoisting.

“In modern JavaScript, we avoid var and prefer const and let because they provide block scope, prevent accidental redeclaration, and reduce bugs.”

02 alert

🧠 The simple reason

👉 alert() works only in the browser,
👉 NOT in Node.js.

🌍 JavaScript runs in TWO environments
1️⃣ Browser (Chrome, Edge, Firefox)

Has:
alert()
prompt()
document
window

2️⃣ Node.js (Terminal / Server)
Has:
console.log()
process
fs

❌ Does NOT have alert()
📌 Why browser has alert() but Node doesn’t?
alert() shows a popup
Popups need a UI (screen)
Node.js runs in terminal (no UI)

❓ Why alert() is not available in Node.js?
✅ Answer:

Because alert() is part of the browser’s Web API, and Node.js runs outside the browser environment.