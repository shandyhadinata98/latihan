import React from "react";
import "./product.css";

const ProductDetail = props => {
  const { title, img, price } = props;
  return (
    <div>
      <div className="title-detail">
        <p>{title}</p>
      </div>

      <div>
        <img className="image-detail" src={img} alt="asc" />
      </div>

      <div className="price-detail">
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
