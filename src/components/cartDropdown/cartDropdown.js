import React from "react";
import "./cartDropdown.scss";

import CustomButton from "../customButton/customButton";
import CartItem from "../cartItem/cartItem";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
