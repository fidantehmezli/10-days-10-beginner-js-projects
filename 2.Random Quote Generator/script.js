// Define an array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
  "The best way to predict your future is to create it. - Abraham Lincoln"
];

// Function to generate a random quote
function generateQuote() {
  // Get a random quote from the quotes array
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Set the text of the quote element to the random quote
  document.getElementById("quote-text").textContent = randomQuote;
}
