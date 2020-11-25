/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import '../styles/pages/Catalog.scss';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

import repository from '../services/api/products';

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    repository.getAll()
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  console.log(products);
  return (
    <>
      <Topbar />
      <div className="catalog">
        <div className="catalog__content">
          {products.map((card, index) => (
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

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Catalog;
