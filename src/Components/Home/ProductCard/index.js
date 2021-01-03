import React from "react";
import "./style.css";

// ui components
import { Button } from "@material-ui/core";

const index = ({ productInfo }) => {
  const {
    productName,
    productDescription,
    productImage,
    productPrice,
  } = productInfo;

  const bgStyles = {
    background: `url(${productImage}) no-repeat`,
    backgroundSize: "cover",
    width: "100%",
    height: "200px",
  };

  return (
    <div className="productCard">
      <div style={bgStyles}></div>
      <div className="content">
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <hr/>
        <div>
          <h4>Price ${productPrice}</h4>
          <Button>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default index;
