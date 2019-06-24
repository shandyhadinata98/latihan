import React from "react";
import { NavLink } from "react-router-dom";
import "./box.css";

const Box = props => {
  const { data, title, price, img } = props;

  return (
    <NavLink
      className="myBox"
      to={{
        pathname: `/detail/` + data,
        aboutProps: { data: data, title: title, price: price, img: img }
      }}
    >
      <div className="card">
        <div className="header">
          <img src={img} alt={title} />
        </div>
        <div className="container">
          <p>{title}</p>

          <div className="price">
            <p>{price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Box;
