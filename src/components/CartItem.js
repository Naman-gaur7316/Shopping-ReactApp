import React from 'react';
import "../sass/main.css";

const CartItem = ({ id, image, price, category, quantity, incrementCart, decrementCart }) => {
  return (
    <div className='cartitem'>
        <div className="cartitem__inner">
            <div className="img-box">
                <img src={image} alt={category} />
            </div>
            <div className="cartitem__info">
                <p>{category}</p>
                <p>Rs. {price}/-</p>
            </div>
        </div>

        <div className="cartitem__quantity">
          <button onClick={() => {decrementCart(id)}}>-</button>
          <div>{quantity}</div>
          <button onClick={() => {incrementCart(id)}}>+</button>
        </div>
    </div>
  )
}

export default CartItem;