// src/components/Cart.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment, decrement } from "../../features/cart/cartSlice.js";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);

  const incrementHandler = (itemId) => {
    dispatch(increment(itemId));
  };

  const decrementHandler = (itemId) => {
    dispatch(decrement(itemId));
  };

  const getItemDetails = (itemId) => {
    return products.find((product) => product.id === itemId);
  };

  const cartDetails = Object.keys(cartItems).map((itemId) => {
    const product = getItemDetails(parseInt(itemId));
    return {
      ...product,
      quantity: cartItems[itemId],
    };
  });

  const subTotal = cartDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subTotal * 0.18;
  const shippingCharges = 200;
  const total = subTotal + tax + shippingCharges;

  return (
    <section className="cart">
      <main>
        {cartDetails.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            img={item.image}
            value={item.quantity}
            increment={() => incrementHandler(item.id)}
            decrement={() => decrementHandler(item.id)}
          />
        ))}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal.toFixed(2)}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax.toFixed(2)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total.toFixed(2)}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
