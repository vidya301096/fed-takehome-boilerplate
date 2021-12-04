import './App.scss';
import Button from './components/atoms/Button';
import Container from './components/atoms/Container';
import Tile from './components/atoms/Tile';
import Logo from './assets/logo.svg';

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
			<Tile src={Logo} title='Article 1' date='Aug 12, 2020'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</Tile>
			<Tile />
		</Container>
	);
}

export default App;
