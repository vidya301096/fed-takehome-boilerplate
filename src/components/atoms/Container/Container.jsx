import React from 'react';
import { string, bool } from 'prop-types';
import './Container.scss';

const Container = ({ className, children, fluid, as, ...rest }) => {
	const Tag = as;
	return (
		<Tag
			className={`Container ${className} ${fluid ? 'fluid' : ''}`}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Container;

Container.propTypes = {
	className: string,
	fluid: bool,
	as: string,
};

Container.defaultProps = {
	className: '',
	fluid: false,
	as: 'div',
};
