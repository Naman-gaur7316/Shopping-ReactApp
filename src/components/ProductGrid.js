import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import "../sass/main.css";
import favouriteContext from "../context/favouriteContext";
import useCartReducer from "../misc/Custom-hooks";

const ProductGrid = ({ products }) => {
  const { favourite, setFavourite } = useContext(favouriteContext);
  const [cart, setCart] = useCartReducer();

  const onHeartClick = (id, isFavourite) => {
    if (isFavourite) {
      setFavourite({ type: "remove", id: id });
    } else {
      setFavourite({ type: "add", id: id });
    }
  };

  const onCartClick = (cartObj) => {
    setCart({ type: "add", cartObj: cartObj });
  };

  console.log(cart)

  const getCartId = () => {
    return cart.map(cartObj => cartObj.id);
  }

  return (
    <div className="productgrid container py-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          category={product.category}
          image={product.image}
          price={product.price}
          rating={product.rating}
          isFavourite={favourite.includes(product.id)}
          isAdded={getCartId().includes(product.id)}
          onCartClick={onCartClick}
          onHeartClick={onHeartClick}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
