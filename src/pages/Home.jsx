/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
import React from 'react';

import '../styles/pages/Home.scss';
import croqui from '../images/croqui-2.jpg';
import croquiTree from '../images/croqui-3.jpg';
import croquiFour from '../images/croqui-4.jpg';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

function carousel() {
  let myIndex = 0;

  let i;
  const x = document.getElementsByClassName('home__slider--img');

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = 'block';

  setTimeout(carousel, 2000);
}
function Home() {
  carousel();
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

        <ul className="home__slider">
          <li>
            <img className="home__slider--img" alt="" src={croqui} />
          </li>
          <li>
            <img className="home__slider--img" alt="" src={croquiTree} />
          </li>
          <li>
            <img className="home__slider--img" alt="" src={croquiFour} />
          </li>
        </ul>
        <Footer />
      </div>
    </>
  );
}

export default Home;
