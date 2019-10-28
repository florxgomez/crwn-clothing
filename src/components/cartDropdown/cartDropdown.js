import React from "react";
import "./cartDropdown.scss";
import { withRouter } from "react-router-dom";

import CustomButton from "../customButton/customButton";
import CartItem from "../cartItem/cartItem";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCartHidden }
  )(CartDropdown)
);
