import React from "react";
import { Col } from "reactstrap";
import CustomButton from "../layout/button";
import Box from "../layout/box";
import "./home.css";

const RenderProduct = props => {
  const { products } = props;
  return (
    products &&
    products.map(data => {
      return (
        <>
          <Box
            data={data.id}
            title={data.productName}
            price={data.productPrice}
            img={data.productImage}
          />
        </>
      );
    })
  );
};

const Home = () => {
  const [data, setData] = React.useState(null);
  const [page, setPage] = React.useState(1);

  const url = `https://product-catalog-api.herokuapp.com/products?page=${page}`;
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response => setData(response.result));
  });

  const next = () => setPage(page + 1);
  const prev = () => setPage(page - 1);

  return (
    <>
      <div class="title">
        <p>POPULAR PRODUCTS</p>
        <hr />
      </div>

      <div class="flex-container">
        <RenderProduct products={data} />
      </div>

      <div class="button-container">
        <Col md="2">
          <div class="left-footer">
            <CustomButton title={"Prev"} click={prev} />
          </div>
        </Col>

        <Col md="8" />

        <Col md="2">
          <div class="right-footer">
            <CustomButton title={"Next"} click={next} />
          </div>
        </Col>
      </div>
    </>
  );
};

export default Home;
