/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { singleCard } from '../store/middleware/products';

import SingleCard from './SingleCard';

export default function Cards(props) {
	const dispatch = useDispatch();
	const showSelected = useSelector(state => state.handle.showSingleCard);
	console.log(showSelected)
	return (
		<>
		{showSelected && <SingleCard /> }
			{props.cards.map((card, index) => (
				<div key={index} className="catalog__card"
					onClick={() => dispatch(singleCard(card))}
				>
					<figure className="catalog__card--image">
						<img alt={`Foto ${card.name}`} src={card.image} />
					</figure>
					<section className="catalog__card--description">
						<div className="catalog__card--description-title">
							{card.name}
						</div>
						<div className="catalog__card--description-price">
							<span className="catalog__card--description-price text">Por apenas: </span>
							<span className="catalog__card--description-price price--actual">
								R$
								{ card.regularPrice}
							</span>
						</div>
					</section>
				</div>
			))}
		</>
	);
}