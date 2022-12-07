import React, { useState } from 'react';

const randomQuotes = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR'];
function App() {
	const [counter, setCounter] = useState(0);
	const [quote, setQuote] = useState(randomQuotes[0]);

	function increment() {
		setCounter(count => count + 1);
	}
	function decrement() {
		setCounter(count => count - 1);
	}

	function randomise() {
		const randomQuote =
			randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
		setQuote(randomQuote);
	}
	return (
		<div className="App">
			<h1>
				Counter: <span>{counter}</span>
				<div>---------</div>
				<div>{quote}</div>
			</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={randomise}>Randomise</button>
		</div>
	);
}

export default App;
