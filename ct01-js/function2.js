function generateQuote() {
  const quotes = [
    "Technology is best when it is human-centered, not business-focused. - Tim Cook",
    "Everything should be made as simple as possible, but no simpler. - Albert Einstein",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Alan Turing",
    "We can't solve problems by using the same kind of thinking we used when we created them. - Albert Einstein",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Technology is nothing. What's important is that you have faith in people, that they'll be able to control it. - Steve Jobs",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs",
    "Progress is impossible without change, and those who cannot change their minds cannot change anything. - George Bernard Shaw",
    "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
    "Technology and innovation are moving at a breathtaking pace, and to keep up, you have to be a lifelong learner. - Sundar Pichai",
    "The best minds of any generation are attracted to the problems of their times. - John F. Kennedy",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "We cannot solve our problems with the same level of thinking that created them. - Albert Einstein",
    "Technology is nothing. What's important is that you have faith in people, that they'll be able to control it. - Steve Jobs",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs",
    "The future is already here it's just not very evenly distributed. - William Gibson",
    "Don't be afraid to fail. It's the only way to learn and grow. - Marissa Mayer",
    "Technology is a tool. You can use it for good or bad, but the good is always going to trump the bad. - Elon Musk",
  ];

  let randomNumber = Math.floor(((Math.random()) * quotes.length));
  alert(quotes[randomNumber]);
}

generateQuote();