// Quotes array
const quotes = [
    "Ada Treat kab de ga ye bata jaldi ??",
    "A true friend is the greatest of all blessings. 🌟",
    "Friends are the abstract siblings. 👯‍♂️",
    "Friendship is the only cement that will ever hold the world together. 🌍",
    "Good friends are like stars. You don't always see them, but you know they’re always there. 🌟",
    "A friend is someone who understands your past, believes in your future, and accepts you just the way you are. 💖",
    "Friendship isn’t about whom you have known the longest; it’s about who came and never left your side. 🤗"
];


function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteBox = document.querySelector('.quote');
    quoteBox.textContent = quotes[randomIndex];

    
    gsap.fromTo(".quote-box", { opacity: 0 }, { opacity: 1, duration: 6 });
}


window.onload = () => {
    gsap.fromTo(".animate-text", { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 6 });
    gsap.fromTo(".intro", { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 6.5 });
    newQuote();
};
