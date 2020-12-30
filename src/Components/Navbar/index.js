import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'

// ui components
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Button} from '@material-ui/core'

const index = () => {
  return (
    <div className="navbar">
      {/* menu items */}
      <div className="links">
        <ul>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/explore">EXPLORE</Link>
          </li>
        </ul>
      </div>

      {/* navabr title */}
      <div className="title">BeadsandBeyond.np</div>

      {/* cart */}
      <div className="cart">
        <Button>
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};

export default index;
