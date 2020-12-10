/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useSelector } from 'react-redux';

// import { filterProducts } from '../store/middleware/products';

import '../styles/pages/Catalog.scss';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Cards from '../components/Cards';

function Catalog() {
	//const dispatch = useDispatch();
	const products = useSelector(state => state.products.products.products);
	

	// const filter = products.filter(category => category.category.includes('T-SHIRT'));
	// dispatch(filterProducts(products, 'BAGS'))
	// const filter = useSelector(state => state.products.productsFiltered)
	// console.log(filter)

  return (
    <>
      <Topbar />
      <div className="catalog">
        <Menu />
        <div className="catalog__content">
					<Cards cards={products}/>
				<Footer />
        </div>				
      </div>
    </>
  );
}

export default Catalog;
