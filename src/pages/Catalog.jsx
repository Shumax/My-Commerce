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
        <div className="container">
          <div className="catalog__card" />

        </div>

        <Footer />
      </div>
    </>
  );
}

export default Catalog;
