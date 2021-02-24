import logo, { ReactComponent as Logo } from './logo.svg';
import './App.scss';

function App() {
	return (
		<div className="app">
			<Logo />
			{/* Or, import the SVG and use it as an image: <img src={logo} alt="Logo" /> */}
			<p>
				<strong>Please create your application here.</strong>
			</p>
			<p>
				Feel free to delete all existing JS or (S)CSS files and start from scratch, all of
				these are placeholder elements. You may split out separate components into separate
				files, or you can organize multiple components within a single file. Try to do what
				you find comfortable.
			</p>
			<p>
				In addition, feel free to use whatever styling means you are comfortable with,
				including:
			</p>
			<ul>
				<li>
					CSS-in-JS (<a href="https://styled-components.com/">styled-components</a>,{' '}
					<a href="https://emotion.sh/">emotion</a>, etc.)
				</li>
				<li>
					<a href="https://sass-lang.com/">Sass</a>
				</li>
				<li>
					<a href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/">
						CSS Modules
					</a>
				</li>
			</ul>
		</div>
	);
}

export default App;
