/*
Quote generator 
*/

const quoteDisplay = document.getElementById("quote")
// const quoteButton = document.getElementById("quote-button");

//Challenge: Write a function that will display a random Inspirational Quote
//from the quotes array, when the button is pressed.
const quotes = [
    "Your life can’t fall apart if you never had it together.",
    "When the going gets tough, the tough gets tougher.",
    
   "Life is hard, but it’s even harder if you’re stupid.",
    
    "Everyone has a purpose in life. Perhaps yours is watching television",
    
    "Life hack: you can’t do anything wrong if you don’t do anything at all.",
    
    "Life better be a destination because this journey sucks.",
    
    "You’re naturally funny because your life is a joke.",
    
    "The meaning of life is to find your gift. So good luck with that.",
    
    "Today will be a day like every other day.",
    "Life is pain. Anyone who says otherwise is selling something.", 

    "When life knocks you down, stay there and take a nap.",

    "Life is what happens when you’re busy reading inspirational quotes.",

    "It’s not just Monday. Your whole life sucks.",

    "If you never try anything new, you’ll miss out on many of life’s great disappointments",

    "Everything is bad and everyone is dumb.",

    "You only die once.",

    "Carpe Nothing.",

    "Life is 10% what happens to you, and 90% how much money you have.",

    "When you think you’re screwed, remember we’re all on a big, wet ball floating in the dark.",

    "Today is the first day of the rest of your life. But so was yesterday, and look how that turned out.",

    "Raise your hand if you have had quite enough unsolicited advice about what should be done with any lemons that life may or may not give you.",

    "It’s all downhill from here.",
]

const lostquotes = [
    `"Begin at the beginning," the King said, very gravely, 
    "and go on till you come to the end: then stop."`, 
    `“Would you tell me, please, which way I ought to go from here?"
        "That depends a good deal on where you want to get to."
        "I don't much care where –"
        "Then it doesn't matter which way you go.”`,
    `“Who in the world am I? Ah, that's the great puzzle.”`,
    `“Curiouser and curiouser!”`,
    `“My dear, here we must run as fast as we can, just to stay in place. 
    And if you wish to go anywhere you must run twice as fast as that.” `,
    `“If you don't know where you are going any road can take you there”`,
    `“I wonder if I've been changed in the night. Let me think. 
    Was I the same when I got up this morning? I almost think I can remember feeling a 
    little different. But if I'm not the same, the next question is 
    'Who in the world am I?' Ah, that's the great puzzle!” `,

]

const aboutquotes =[
    `test`,
    `test`,
    `test`,
    `test`,
    `test`,

]
function aliceQuote() {
    let quoteList = Math.floor(Math.random() * (lostquotes.length))
    quoteDisplay.innerHTML = (lostquotes[quoteList])
}

function aboutQuote() {
    let quoteList = Math.floor(Math.random() * (aboutquotes.length))
    quoteDisplay.innerHTML = (aboutquotes[quoteList])
}




