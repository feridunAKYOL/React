import React from 'react';

function App() {
	const result = 23434 * 0.345;
	return (
		<section>
			<h1>The Example App</h1>
			<NewsArticle />
			<p>
				Renders the value of a variable: <span>{result}</span>
			</p>
			<button
				data-testid="load-more"
				onClick={() => {
					console.log('The button was clicked');
				}}
			>
				Load More
			</button>
		</section>
	);
}

function NewsArticle(props) {
	return (
		<div>
			<article>
				<h1>{props.title}</h1>
			</article>
		</div>
	);
}

function MyApp() {
	const articles = [
		{
			title: 'Article',
			text: 'My First React App'
		},
		{
			title: 'Article',
			text: 'My First React App2'
		},
		{
			title: 'Article',
			text: 'My First React App3'
		},
		{
			title: 'Article',
			text: 'My First React App4'
		}
	];

	return articles.map((item) => <NewsArticle title={item.text} />);
}

export { App, MyApp };
