import React, { memo } from 'react'
import { useContext } from 'react';
import Loader from '../components/Loader';
import ProductGrid from '../components/ProductGrid';
// import FavouriteState from '../context/FavouriteState';
import ProductContext from '../context/productContext';





const Home = () => {
    const products = useContext(ProductContext);
    // console.log(products)
  return (

    <div>
      {products.length === 0 && <Loader />}
      {products.length !== 0 && <ProductGrid products={products} />}
    </div>
  )
}

export default memo(Home)