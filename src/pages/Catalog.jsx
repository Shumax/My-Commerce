/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadProducts } from '../store/middleware';

import '../styles/pages/Catalog.scss';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

function Catalog() {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products.products);

	useEffect(function fetchAll() {
		dispatch(loadProducts())
	},[dispatch]);

  console.log(products);
  return (
    <>
      <Topbar />
      <div className="catalog">
        <Menu />
        <div className="catalog__content">
          {products.products.map((card, index) => (
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
				<Footer />
        </div>				
      </div>
    </>
  );
}

export default Catalog;
