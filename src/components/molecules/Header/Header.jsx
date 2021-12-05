import React from 'react';
import { object, string } from 'prop-types';
import Container from '../../atoms/Container';
import Button from '../../atoms/Button';
import Logo from '../../../assets/logo.svg';
import './Header.scss';

const Header = ({ className, links, ...rest }) => {
	return (
		<Container
			as='header'
			fluid
			className={`Header ${className}`}
			{...rest}
		>
			<a href='/' className='header--logo'>
				<img alt='Header logo' src={Logo} />
			</a>
			<nav className='header--link_group'>
				{Object.keys(links).length > 0 &&
					Object.keys(links).map((link, i) => {
						return (
							<Button href={links[link]} key={i}>
								{link.toUpperCase()}
							</Button>
						);
					})}
			</nav>
		</Container>
	);
};

export default Header;

Header.propTypes = {
	className: string,
	links: object,
};

Header.defaultProps = {
	className: '',
	links: {},
};
