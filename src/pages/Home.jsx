import React from 'react';

import '../styles/pages/Home.scss';
import croqui from '../images/croqui-2.jpg';
import croquiTree from '../images/croqui-3.jpg';
import croquiFour from '../images/croqui-4.jpg';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Topbar />
      <div className="home">
        <nav className="container">
          <ul className="home__list">
            <li className="home__list--item">T-Shirts</li>
            <li className="home__list--item">Pants</li>
            <li className="home__list--item">Shoes</li>
            <li className="home__list--item">Bags</li>
          </ul>
        </nav>

        <ul className="home_slider">
          <li>
            <img alt="" src={croqui} />
          </li>
          <li>
            <img alt="" src={croquiTree} />
          </li>
          <li>
            <img alt="" src={croquiFour} />
          </li>

        </ul>

        <Footer />
      </div>
    </>
  );
}

export default Home;
