import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../Data";
import Product from "./Product";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log('product id',filterProduct);
    setProduct(filterProduct[0]);
    const relatedProduct = items.filter(
      (reP) => reP.category === product.category
    );
    setRelatedProducts(relatedProduct);
  }, [id, product.category]);

  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt=""></img>
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} TK</button>
          <button className="btn btn-warning">Add To Cart</button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Product items={relatedProducts}></Product>
    </>
  );
};

export default ProductDetail;
