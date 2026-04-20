# 💬 Random Quote Generator

A JavaScript project that displays a random motivational quote each time the user clicks a button.

Unlike basic implementations, this version ensures that **quotes do not repeat until all have been shown once**.

---

## 🚀 Features

* 🎲 Generate a random quote on button click
* 🔁 No repetition until all quotes are used
* ♻️ Automatically resets after all quotes are shown
* ⚡ Instant UI update
* 🎨 Simple and clean interface

---

## 🛠 Tech Stack

* HTML
* CSS
* JavaScript

---

## 📂 Project Structure

```id="j3k9q1"
Day-03/
│── index.html
│── style.css
│── script.js
```

---

## ⚙️ How the Random Quote Generator Works

1. A list of quotes is stored in an array.

2. A `Set` is used to keep track of which quotes have already been displayed.

   * This prevents the same quote from appearing again until all quotes are used.

3. When the button is clicked, the `generateQuote()` function runs.

4. The program first checks:

   * If all quotes have been used (`usedIndexes.size === quotes.length`)
   * If true, the set is cleared to restart the cycle.

5. A random index is generated using:

```js
Math.floor(Math.random() * quotes.length)
```

6. The program checks if this index has already been used:

   * If yes → it skips and tries again
   * If no → it selects the quote

7. The selected quote is displayed on the webpage using:

```js
quoteElement.textContent = quote;
```

8. The index is added to the `Set` to mark it as used.

9. The process repeats with each button click, ensuring all quotes are shown once before repeating.

---

## 🧠 Key Logic

* Random selection → `Math.random()`
* Avoid repetition → `Set`
* Loop control → `while`, `continue`, `break`
* DOM update → `textContent`

---

## 🔁 Flow Summary

> Generate random quote → check if used → display → store → repeat


## 💡 Key Concepts Learned

* Arrays and data storage
* Random number generation (`Math.random`)
* DOM manipulation (`getElementById`, `innerHTML`)
* Data structures (`Set`)
* Loop control (`while`, `break`, `continue`)
* Event handling (`onclick`)

---

## ▶️ How to Run

1. Open the project folder
2. Open `index.html` in your browser
3. Click the **Generate Quote** button

---

## 🧠 Example Behavior

* Click → shows a random quote
* Keep clicking → no repeats
* After all quotes are shown → cycle restarts

---

## 🔥 Future Improvements

* Display author name separately
* Add fade-in animation for quotes
* Add “Copy Quote” button
* Fetch quotes from an API
* Replace inline `onclick` with `addEventListener`

---

## 🧠 What This Project Means

This project helped me understand how to manage state in JavaScript using data structures like `Set`, and how to build smarter logic beyond basic random generation.

