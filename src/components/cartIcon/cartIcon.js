import React from "react";
import "./cartIcon.scss";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default connect(
  null,
  { toggleCartHidden }
)(CartIcon);
