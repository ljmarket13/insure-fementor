import React from 'react';
import { cards } from '../data/card';
import { useState } from 'react';

const Card = () => {

	const [card, getCard] = useState(cards);

	return (
		<div>
			<div className="midContainer">
				<h1>We're different</h1>
					<section className="col3">
						{card.map(({id, image, title, text}) => (
						<div key={id} className="card">
							<img src={image} alt="icon" className="card-icon" />
							<div className="card-body">
								<h2>{title}</h2>
								<p>{text}</p>
							</div>
						</div>
					))}
				</section>
					
			</div>
		</div>
	)
}

export default Card
