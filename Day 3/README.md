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

## ⚙️ How It Works

1. A list of quotes is stored in an array
2. A random index is generated using:

```id="n8d2x7"
Math.floor(Math.random() * quotes.length)
```

3. A `Set` is used to track previously used indexes
4. If a quote has already been used, another random index is generated
5. Once all quotes are used, the set resets
6. The selected quote is displayed on the page

---

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

