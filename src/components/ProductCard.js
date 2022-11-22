import React from 'react';
import '../sass/main.css';

const ProductCard = ({ id, category, image, price, rating, isFavourite, isAdded, onCartClick, onHeartClick }) => {
    const value = Math.round(price) * 10;
    const renderStar = () => {
        let star = "";
        for(let i = 0; i < Math.round(rating.rate); i++) {
            star += "⭐";
        }

        return star;
    }

    const cartObj = {
        id: id,
        image: image,
        price: value,
        category: category,
        quantity: 1
    };

  return (
    <div className='productcard'>
        <div className="productcard__inner">
            <div className="img-box">
                <img src={image} alt={category} />
            </div>
            <div className="productcard__info">
                <p>Rs. {value}/-</p>
                <div className="rating">
                    <div>{renderStar()}</div>
                    <div>{rating.count} Reviews</div>
                </div>
                <div className="productcard__btn">
                    <button className='btn' onClick={() => {onCartClick(cartObj)}} disabled={isAdded} >
                        {isAdded ? `Added`: 'Add to cart'}
                    </button>
                    <button onClick={() => onHeartClick(id, isFavourite)}>
                        <div className={`${isFavourite ? 'heart-1' : 'heart'}`}></div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;