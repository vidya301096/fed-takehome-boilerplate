import React from 'react';
import { string } from 'prop-types';
import './Button.scss';

const Button = ({ children, href, className, ...rest }) => {
	const Tag = href ? 'a' : 'button';
	return (
		<Tag
			className={`Button ${className} ${href ? 'Button--link' : ''}`}
			href={href}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Button;

Button.propTypes = {
	className: string,
	children: string.isRequired,
	href: string,
};

Button.defaultProps = {
	href: '',
	className: '',
};
