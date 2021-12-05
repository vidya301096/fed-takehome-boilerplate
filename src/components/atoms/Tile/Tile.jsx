import React, { useState } from 'react';
import { string } from 'prop-types';
import './Tile.scss';

const Tile = ({ className, as, src, href, date, title, children, ...rest }) => {
	const Tag = as;
	const [noContent, setNoContent] = useState(Boolean(!src));
	return (
		<Tag
			className={`Tile ${className}`}
			href={as === 'a' ? (href ? href : 0) : 0}
			{...rest}
		>
			{!noContent ? (
				<img
					className='tile--image'
					src={src}
					onError={() => {
						setNoContent(true);
					}}
					alt={title}
				/>
			) : (
				<div className='tile--image--no_content' />
			)}
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
