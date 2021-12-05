import './App.scss';
import HomeTemplate from './components/templates/HomeTemplate';
import content from './content/homepage.js';

function App() {
	return (
		<>
			<HomeTemplate content={content} />
		</>
	);
}

export default App;
