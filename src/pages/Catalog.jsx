/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterProducts } from '../store/middleware/products';

import '../styles/pages/Catalog.scss';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Loading from '../components/Loading';

function Catalog() {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products.products.products);
	

	console.log(products);
	// const filter = products.filter(category => category.category.includes('T-SHIRT'));
	dispatch(filterProducts(products, 'BAGS'))
	const filter = useSelector(state => state.products.productsFiltered)
	console.log(filter)

  return (
    <>
      <Topbar />
      <div className="catalog">
        <Menu />
        <div className="catalog__content">
					{!products.length ? (
						<Loading />
					):(
					products.map((card, index) => (
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
			  	)))}
				<Footer />
        </div>				
      </div>
    </>
  );
}

export default Catalog;
