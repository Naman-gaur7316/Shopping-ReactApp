import React, { useEffect, useState } from "react";
import { fetchAPI } from "../misc/Config";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => fetchAPI().then((res) => setProducts(res)), 2000);
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
