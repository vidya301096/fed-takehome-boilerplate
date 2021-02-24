import React from 'react';
import ReactDOM from 'react-dom';

// If you don't want to use normalize, or want to use a different Normalize / CSS Reset file,
// feel free to remove this and / or replace it with whatever you'd like.
import './normalize.css';

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
