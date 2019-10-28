import React from "react";
import StripeCheckout from "react-stripe-checkout";
import './stripeButton.scss'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_tTNnurSSFLSQi6h0xBdsiN1A00y2sN0EJR";

  const onToken = token => {
    console.log(token);
    alert("Payment Successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
