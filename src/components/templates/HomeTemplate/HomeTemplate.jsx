import React, { useState } from 'react';
import { arrayOf, object, shape, string } from 'prop-types';

import Container from '../../atoms/Container';
import Tile from '../../atoms/Tile';
import Header from '../../molecules/Header';
import Hero from '../../molecules/Hero';
import Footer from '../../atoms/Footer';
import Button from '../../atoms/Button';

import './HomeTemplate.scss';

const HomeTemplate = ({ content, className }) => {
	const [sectionWithoutImage, setSectionWithoutImage] = useState(false);
	return (
		<main className={`HomeTemplate ${className}`}>
			<Header {...content.header} />
			<Hero {...content.hero}></Hero>
			<Container as='section' className='home_template--articles'>
				{content.tiles.map((tile, i) => {
					return (
						<Tile
							as='a'
							key={i}
							href={tile.href}
							className='home_template--tile'
							src={tile.src}
							title={tile.title}
							date={tile.date}
						>
							{tile.content}
						</Tile>
					);
				})}
			</Container>
			<Container as='section' className='home_template--section'>
				<div className='home_template--section--image_container'>
					{!sectionWithoutImage ? (
						<img
							src={content.section.src}
							className='home_template--section--image'
							alt={content.section.title}
							onError={() => {
								setSectionWithoutImage(true);
							}}
						/>
					) : (
						<div className='home_template--section--no_image'></div>
					)}
				</div>
				<div className='home_template--section--content'>
					<h1 className='home_template--section--title'>
						{content.section.title}
					</h1>
					<h2 className='home_template--section--tag'>
						{content.section.tagLine}
					</h2>
					<p className='home_template--section--text'>
						{content.section.content}
					</p>
					<Button className='home_template--section--button'>
						{content.section.button}
					</Button>
				</div>
			</Container>
			<Footer {...content.footer} />
		</main>
	);
};

export default HomeTemplate;

HomeTemplate.propTypes = {
	content: shape({
		header: shape({
			links: object.isRequired,
		}).isRequired,
		hero: shape({
			greeting: string,
			title: string.isRequired,
			button: string,
		}).isRequired,
		tiles: arrayOf(
			shape({
				title: string,
				date: string,
				href: string,
				src: string,
				content: string,
			}),
		).isRequired,
		section: shape({
			src: string,
			title: string.isRequired,
			tagLine: string,
			content: string,
			button: string,
		}).isRequired,
		footer: shape({
			phone: string.isRequired,
		}).isRequired,
	}),
	className: string,
};

HomeTemplate.defaultProps = {
	className: '',
	content: shape({
		hero: shape({
			greeting: '',
			button: '',
		}),
		tiles: arrayOf(
			shape({
				title: '',
				date: '',
				href: '',
				src: '',
				content: '',
			}),
		),
		section: shape({
			src: '',
			tagLine: '',
			content: '',
			button: '',
		}),
	}),
};
