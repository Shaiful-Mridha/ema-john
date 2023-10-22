/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  // const Cart = (props) => {
  //const cart = props.cart;
  //const {cart} = props;

  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    //option 3 we have one more different way to add quantity

    // option 2

    // if(product.quantity === 0){
    //     product.quantity =1
    // }

    //option 1
    // product.quantity = product.quantity || 1;

    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      {/* <p>Selected Items: {cart.length}</p> */}
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <p>Grand Total: ${grandTotal.toFixed(2)} </p>
      <button onClick={handleClearCart} className="btn-clear">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
