// Cart.js
import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { FaTrash } from "react-icons/fa";
import QuantitySelector from "./QuantitySelector";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cart]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cart.map((item) => {
      price += item.price.mrp * item.quantity;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  return (
    <div>
      <h2 className="text">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart_heading grid grid five-coloumn">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr />

          <ul>
            {cart.map((item) => (
              <div className="mrp">
                <li key={item.id}>
                  <div>
                    <img className="cartimage" src={item.url} alt="" />
                    <div className="shorttitle">{item.title.shortTitle}</div>
                  </div>
                  <div className="mrp1" {...item.price.mrp}>
                    {item.price.cost}
                  </div>

                  <QuantitySelector
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                  />

                  {/* subtotal */}
                  <div className="cart-hide subtotal">
                    <p>
                      <div> ₹{item.price.cost * quantity}</div>
                    </p>
                  </div>
                  <div>
                    <FaTrash
                      className="remove_icon"
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </div>
                </li>
              </div>
            ))}
          </ul>
          <div className="containerprice">
            <div className="row">
              <div className="head">
                <p className="top-heading">PRICE DETAILS</p>
              </div>
              <div className="totalcontainer">
                <div className="heading">
                  Price({Cart?.length} item)
                  <p className="output" component="span">
                    ₹{price * quantity}
                  </p>
                </div>

                <div className="heading">
                  Discount
                  <p className="output" component="span">
                    ₹{discount * quantity}
                  </p>
                </div>
                <div className="heading">
                  Delivery Charges
                  <p className="output" component="span">
                    ₹40
                  </p>
                </div>
                <div className="heading" id="total" variant="h6">
                  Total Amount
                  <p className="output" component="span">
                    ₹{price * quantity - discount * quantity + 40}
                  </p>
                </div>
                <div className="offer">
                  You will save ₹{discount * quantity - 40} on this order
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
