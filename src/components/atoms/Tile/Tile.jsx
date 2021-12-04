import React from 'react';
import { string } from 'prop-types';
import './Tile.scss';

const Tile = ({ className, as, src, href, date, title, children, ...rest }) => {
	const Tag = as;
	return (
		<Tag
			className={`Tile ${className}`}
			href={as === 'a' ? (href ? href : 0) : 0}
			{...rest}
		>
			<img className='tile--image' alt={title} src={src ? src : 0} />
			<h1 className='tile--title'>{title}</h1>
			<p className='tile--date'>{date}</p>
			<p className='tile--content'>{children}</p>
		</Tag>
	);
};

export default Tile;

Tile.propTypes = {
	className: string,
	as: string,
	src: string,
	href: string,
	date: string,
	title: string,
	children: string,
};

Tile.defaultProps = {
	className: '',
	as: 'div',
	src: '',
	href: '',
	date: '',
	title: '',
	children: '',
};
