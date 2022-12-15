import React from 'react';

export default function Meme() {
	const thingsArray = ['Thing 1', 'Thing 2'];
	return (
		<main>
			<form className="form">
				<input type="text" className="form--input" placeholder="Top text" />
				<input type="text" className="form--input" placeholder="Bottom text" />
				<button className="form--button">Get a new meme image 🖼</button>
			</form>
			<div>
				<button>Add Item</button>
				{
					/* Insert the things here*/
					thingsArray.map((thing, index) => (
						<p key={index}>{thing}</p>
					))
				}
			</div>
		</main>
	);
}
