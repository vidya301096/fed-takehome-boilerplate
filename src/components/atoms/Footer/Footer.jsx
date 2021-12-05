import React from 'react';
import { string } from 'prop-types';
import './Footer.scss';
import Container from '../Container';

const Footer = ({ className, phone, ...rest }) => {
	return (
		<Container
			as='footer'
			className={`Footer ${className}`}
			fluid
			{...rest}
		>
			<p className='footer--phone'>
				PHONE: <b>{phone}</b>
			</p>
			<p className='footer--copyright'>
				© COPYRIGHT 2013 <b>DESIGNORY.COM</b>
			</p>
		</Container>
	);
};

export default Footer;

Footer.propTypes = {
	className: string,
	phone: string.isRequired,
};

Footer.defaultProps = {
	className: '',
};
