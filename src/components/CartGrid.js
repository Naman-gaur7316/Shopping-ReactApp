import React from "react";
import "../sass/main.css";
import CartItem from "./CartItem";
import useCartReducer from '../misc/Custom-hooks';

const CartGrid = () => {

  const [cart, setCart] = useCartReducer();

  const incrementCart = (id) => {
    setCart({type: 'INCREMENT', id: id})
  };
  const decrementCart = (id) => {
    setCart({type: 'DECREMENT', id: id})
  };


  return (
    <>
      <div className="cartgrid container py-5">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            price={item.price}
            category={item.category}
            quantity={item.quantity}
            incrementCart={incrementCart}
            decrementCart={decrementCart}
          />
        ))}
      </div>

      <div className="cart-total container">
          <p>Total price: </p>
          <div className="price">
            {cart.reduce((acc, item) => {
              return acc += item.price * item.quantity;
            }, 0)}
          </div>
      </div>
    </>
  );
};

export default CartGrid;
