import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadProducts } from '../store/middleware/products';

import '../styles/pages/Home.scss';
import banner from '../images/banner.webp';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

function Home() {
	const dispatch = useDispatch();
	
	useEffect(
		async function fetchAll() {
			await dispatch(loadProducts());
		},
	[dispatch]);
  return (
    <>
      <Topbar />
      <div className="home">
        <Menu />

        <div className="home__banner">
          <img alt="banner" src={banner} />
        </div>

        <div className="home__promo">
          <p>Até 15% Off!</p>

          <button>
            <Link to="/catalog">
              Aproveite
            </Link>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
