import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/Home.scss';
import banner from '../images/banner.webp';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

function Home() {
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
