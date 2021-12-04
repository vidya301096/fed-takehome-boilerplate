import './App.scss';
import Button from './components/atoms/Button';
import Container from './components/atoms/Container';

function App() {
	return (
		<Container>
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
		</Container>
	);
}

export default App;
