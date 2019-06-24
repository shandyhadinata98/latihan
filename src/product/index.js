import React from "react";
import "./product.css";

const ProductDetail = props => {
  const url = `https://product-catalog-api.herokuapp.com/products/${
    props.match.params.id
  }`;
  const [data, setData] = React.useState(url);
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response => setData(response));
  });

  return (
    <div>
      <div className="title-detail">
        <p>{data.productName}</p>
      </div>

      <div>
        <img
          className="image-detail"
          src={data.productImage}
          alt={data.productName}
        />
      </div>

      <div className="price-detail">
        <p>{data.productPrice}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
