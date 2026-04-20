# 🔁 Palindrome Checker

A simple JavaScript project that checks whether a given word is a palindrome.

A **palindrome** is a word that reads the same forward and backward (e.g., *madam*, *racecar*).

---

## 🚀 Features

* 🔤 Accepts user input
* 🔁 Reverses the string dynamically
* 🔍 Case-insensitive comparison
* ⚡ Instant result using alert
* 🧹 Clears input after checking

---

## 🛠 Tech Stack

* HTML
* CSS
* JavaScript

---

## 📂 Project Structure

```id="uxq3z8"
Day-02/
│── index.html
│── style.css
│── script.js
```

---

## ⚙️ How It Works

1. User enters text in the input field
2. Input is converted to lowercase
3. The string is reversed using:

```id="kq8t9p"
str.split("").reverse().join("")
```

4. Original and reversed strings are compared
5. Result is displayed using an alert

---

## 💡 Key Concepts Learned

* DOM manipulation (`getElementById`)
* Functions in JavaScript
* String methods
* Array methods (`split`, `reverse`, `join`)
* Conditional statements (`if-else`)
* Event handling (`onclick`)

---

## ▶️ How to Run

1. Open the project folder
2. Open `index.html` in your browser
3. Enter a word and click **Check**

---

## ⚠️ Limitations

* Spaces and punctuation are not ignored
* Works best with single words
* Example that won’t work:

  * `A man, a plan, a canal: Panama`

---

## 🔥 Future Improvements

* Ignore spaces and special characters
* Display result on the page instead of alert
* Improve UI design
* Use `addEventListener` instead of inline `onclick`

---

## 🧠 What This Project Means

This project helped me understand how to manipulate strings and apply logic using JavaScript.

