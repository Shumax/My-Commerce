/* eslint-disable react/prop-types */
import React from 'react';

export default function Cards(props) {
	console.log(props)
	
	return (
		<>
			{props.cards.map((card, index) => (
				<div key={index} className="catalog__card">
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