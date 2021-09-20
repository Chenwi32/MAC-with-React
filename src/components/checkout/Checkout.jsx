import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const { basket, user } = useStateValue()[0];
  // debugger
  return (
    <div className="checkout container">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">
            {user
              ? `Hey ${user.email}, these are the items you selected`
              : 'This is a Shopping Cart'}
          </h2>
          {/* Basket items */}
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
