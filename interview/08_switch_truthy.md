## Control Flow & Switch

**Control Flow** = Order in which code executes. You control it with:
- `if/else` - conditional branches
- `switch` - multiple condition matching
- loops (`for`, `while`) - repetition
- `try/catch` - error handling

---

## Switch Statement

Multi-way branch based on matching a value:

```javascript
switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('Almost weekend!');
    break;
  default:
    console.log('Regular day');
}
```

**Key points:**
- `break` prevents fall-through to next case
- `default` is optional (like else)
- Uses strict equality (`===`)
- More readable than multiple if/else for same variable

---

## Truthy vs Falsy

JavaScript converts values to boolean in conditionals.

**Falsy values** (only 6):
- `false`
- `0`, `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Everything else is truthy**, including:
- `"0"`, `"false"` (non-empty strings)
- `[]`, `{}` (empty arrays/objects)
- `42`, `-1` (non-zero numbers)

```javascript
if (user.name) { // checks if name exists and isn't empty
  console.log('Hello ' + user.name);
}

// Common pattern
const value = input || 'default'; // uses 'default' if input is falsy
```

**Interview tip:** Know the 6 falsy values by heart!