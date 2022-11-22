import React, { useContext, useEffect, useState } from 'react'
import Loader from '../components/Loader';
import ProductGrid from '../components/ProductGrid';
import favouriteContext from '../context/favouriteContext'
import ProductContext from '../context/productContext';
import favouriteImg from '../images/favourite.png';
import '../sass/main.css';

// eslint-disable-next-line no-unused-vars
const emptyFav = () => {
  return (
    <div className='empty-fav'>
      <div className="img">
        <img src={favouriteImg} alt="favourite" />
      </div>
      <p>Add some favourites first..:)</p>
    </div>
  )
}

const Favourite = () => {
  // eslint-disable-next-line no-unused-vars
  const {favourite, _} = useContext(favouriteContext);
  const products = useContext(ProductContext);
  const [favState, setFavState] = useState([]);

  useEffect(() => {
    const favArr = products.filter(p => favourite.includes(p.id));
    setFavState(favArr);
  }, [favourite, products])
  

  return (
    <div>
      {favState.length === 0 ? emptyFav() : <ProductGrid  products={favState} />}
    </div>
  )
}

export default Favourite