import React from 'react';
import { string } from 'prop-types';
import './Button.scss';

const Button = ({ children, href }) => {
	const Tag = href ? 'a' : 'button';
	return (
		<Tag className={`Button ${href ? 'Button--link' : ''}`} href={href}>
			{children}
		</Tag>
	);
};

export default Button;

Button.propTypes = {
	children: string.isRequired,
	href: string,
};

Button.defaultProps = {
	href: '',
};
