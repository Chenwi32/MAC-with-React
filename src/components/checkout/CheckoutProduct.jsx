import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const dispatch = useStateValue()[1];
  const removeFromCart = () => {
    // Remove Item
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct flex">
      <img src={image} alt="" />
      <div className="info flex__col">
        <div>
          <p>{title}</p>
          <p>XAF {price} </p>
        </div>

        <button onClick={removeFromCart} className="btn2">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
