// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

function Header() {
	return (
		<header>
			<nav>
				<img src="./react-logo.png" width="40px" />
			</nav>
		</header>
	);
}

function Footer() {
	return (
		<footer>
			<small>© 2021 gidi development. All rights reserved.</small>
		</footer>
	);
}

function Main() {
	return (
		<div>
			<h1>Fun facts about React</h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</div>
	);
}
function Page() {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById('root'));
