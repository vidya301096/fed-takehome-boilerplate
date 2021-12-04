import React from 'react';
import { string, element, bool } from 'prop-types';
import './Container.scss';

const Container = ({ className, children, fluid, as }) => {
	const Tag = as;
	return (
		<Tag className={`Container ${className} ${fluid ? 'fluid' : ''}`}>
			{children}
		</Tag>
	);
};

export default Container;

Container.propTypes = {
	className: string,
	children: element.isRequired,
	fluid: bool,
	as: string,
};

Container.defaultProps = {
	className: '',
	fluid: false,
	as: 'div',
};
