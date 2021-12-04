import React from 'react';
import { string } from 'prop-types';
import './Hero.scss';
import Container from '../../atoms/Container';
import Button from '../../atoms/Button';

const Hero = ({ className, greeting, title, button, ...rest }) => {
	return (
		<section className={`Hero ${className}`} {...rest}>
			<Container className='hero--content'>
				<p className='hero--greeting'>{greeting}</p>
				<h1 className='hero--title'>{title}</h1>
				{button && <Button className='hero--button'>{button}</Button>}
			</Container>
		</section>
	);
};

export default Hero;

Hero.propTypes = {
	className: string,
	greeting: string,
	title: string.isRequired,
	button: string,
};

Hero.defaultProps = {
	className: '',
	greeting: '',
	button: '',
};
