import React, { useState } from 'react';

function App() {
	const [counter, setCounter] = useState(0);

	function increment() {
		setCounter(count => count + 1);
	}
	function decrement() {
		setCounter(count => count - 1);
	}

	return (
		<div className="App">
			<h1>
				Counter: <span>{counter}</span>
			</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default App;
