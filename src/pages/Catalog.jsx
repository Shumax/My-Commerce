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
        setProducts(data);
      });
  }, []);

  console.log(products);
  return (
    <>
      <Topbar />
      <div className="catalog">
        <div className="catalog__content">
          <div className="catalog__card">
            <div className="catalog__card--image">
              <img alt="" src="https://static.zattini.com.br/produtos/sapatilha-moleca-bico-fino-verniz-feminina/06/D98-1516-006/D98-1516-006_zoom2.jpg?ts=1605767776&ims=326x" />
            </div>
            <section className="catalog__card--description">
              <div className="catalog__card--description-title">
                Sapatilha Moleca Bico Fino Verniz Feminina
              </div>
              <div className="catalog__card--description-price">
                <span className="catalog__card--description-price price--regular">R$49,99</span>
                <span className="catalog__card--description-price price--actual">R$34,99</span>
              </div>
            </section>
          </div>

          <div className="catalog__card">
            <div className="catalog__card--image">
              <img alt="" src="https://static.zattini.com.br/produtos/sapatilha-moleca-bico-fino-verniz-feminina/06/D98-1516-006/D98-1516-006_zoom2.jpg?ts=1605767776&ims=326x" />
            </div>
            <section className="catalog__card--description">
              <div className="catalog__card--description-title">
                Sapatilha Moleca Bico Fino Verniz Feminina
              </div>
              <div className="catalog__card--description-price">
                <span className="catalog__card--description-price price--regular">R$49,99</span>
                <span className="catalog__card--description-price price--actual">R$34,99</span>
              </div>
            </section>
          </div>
          <div className="catalog__card">
            <div className="catalog__card--image">
              <img alt="" src="https://static.zattini.com.br/produtos/sapatilha-moleca-bico-fino-verniz-feminina/06/D98-1516-006/D98-1516-006_zoom2.jpg?ts=1605767776&ims=326x" />
            </div>
            <section className="catalog__card--description">
              <div className="catalog__card--description-title">
                Sapatilha Moleca Bico Fino Verniz Feminina
              </div>
              <div className="catalog__card--description-price">
                <span className="catalog__card--description-price price--regular">R$49,99</span>
                <span className="catalog__card--description-price price--actual">R$34,99</span>
              </div>
            </section>
          </div>
          <div className="catalog__card">
            <div className="catalog__card--image">
              <img alt="" src="https://static.zattini.com.br/produtos/sapatilha-moleca-bico-fino-verniz-feminina/06/D98-1516-006/D98-1516-006_zoom2.jpg?ts=1605767776&ims=326x" />
            </div>
            <section className="catalog__card--description">
              <div className="catalog__card--description-title">
                Sapatilha Moleca Bico Fino Verniz Feminina
              </div>
              <div className="catalog__card--description-price">
                <span className="catalog__card--description-price price--regular">R$49,99</span>
                <span className="catalog__card--description-price price--actual">R$34,99</span>
              </div>
            </section>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Catalog;
