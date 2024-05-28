import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ pro }) => {
  const { price, productimage, productName, description, oldPrice } = pro;
  return (
    <div className="product-card">
      <div className="card-image-box">
        <img src={productimage} />
      </div>
      <div className="card-data">
        <h2 className="product-name">{productName}</h2>
        <p className="product-desc">{description}</p>
        <p className="product-price">
          <span className="price">{price}</span>{" "}
          <span className="price old-price">{oldPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
