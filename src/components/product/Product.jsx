import React from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating }) {
  const dispatch = useStateValue()[1];

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product ">
      <div className="about__product">
        <p className="product__details">{title}</p>

        <p>
          <small>XAF</small>
          <strong> {price}</strong>
        </p>
        <div className="rating flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="rating__stars" key={i}>&#x2B50;</p>
            ))}
        </div>
      </div>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <button onClick={addToCart} className="addtocart btn">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
