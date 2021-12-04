import './App.scss';
import Button from './components/atoms/Button';

function App() {
	return (
		<>
			<div
				style={{
					background: '#ebebeb',
					width: '100%',
					height: '200px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Button>DOWNLOAD NOW</Button>
			</div>
			<Button href='https://www.google.com'>DOWNLOAD NOW</Button>
		</>
	);
}

export default App;
