const quotes=[
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett"
];  
const usedIndexes = new Set();
// Function to get a random quote
// Set doesnt keep track of the order of elements, so we can use it to store used indexes. We just check if it is stored or not.
// This function ensures that the same quote is not repeated until all quotes have been used.
const quoteElement=document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size === quotes.length) {
        // If all quotes have been used, reset the set of used indexes
        usedIndexes.clear();
    }
    
    while (true){
        const randomIdx=Math.floor(Math.random()*quotes.length);
        // Generate a random index between 0 and the length of the quotes array
        if (usedIndexes.has(randomIdx)) continue
        //If the index has already been used, skip to the next iteration of the loop

        const quote=quotes[randomIdx];
        // Get the quote at the random index
        quoteElement.innerHTML=quote;
        //innerHTML is used to get whats inside the opening and closing tags
       
        usedIndexes.add(randomIdx);
        // Add the index to the set of used indexes
        break;// Exit the loop after displaying a new quote
    }
}
