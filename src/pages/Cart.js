import React from 'react';
import CartGrid from '../components/CartGrid';
import useCartReducer from '../misc/Custom-hooks';


const Cart = () => {
  const [cart, _] = useCartReducer();

  // console.log(cart)

  return (
    <>
      {cart.length > 0 && <CartGrid />}
    </>
  )
}

export default Cart;