// FSJS - Random Quote Generator


// Create the array of quote objects and name it quotes
var Quotes = [
  { quote: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.',
    source: 'Pele',
},
  { quote:'A genuine leader is not a searcher for consensus but a molder of consensus.',
    source: 'Martin Luther King, Jr.',
},

{ quote: 'The best ideas come as jokes. Make your thinking as funny as possible.',
  source: 'David Ogilvy',
},

{ quote: 'The secret of getting ahead is getting started.',
  source: 'Mark Twain',
},

{ quote: 'There is no substitute for hard work.',
  source: 'Thomas A. Edison'
}
];

// getRandomQuote function
function getRandomQuote(array)
{
	var getRandomNumber = Math.floor(Math.random() * (quotes.length));
  return array[getRandomNumber];
}

function printQuote (){
  //get quote
  var random = getRandomQuote(quotes);
  console.log(random);
  var outputDiv = document.getElementById('quote-box');

  let quote = '<p class="quote">' +random.quote + '</p><p class="source">' + random.source + '</p>';

  outputDiv.innerHTML = quote;

}

  /*printQuote();
  document.getElementById('quote-box').innerHTML = quotes;
  */



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('quote-box').addEventListener('click', function);
