import React from "react";
import { useCart } from "./CartContext";
import Badge from "./Badge";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCart();

  const getTotalItemsInCart = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Offers
                </a>
              </li>
            </ul>
            <span className="navbar-text">
                <Link to= "/cart" className="cartLink">Cart{getTotalItemsInCart() > 0 && (
                    <Badge className='badge' count={getTotalItemsInCart()} />
                  )}
                </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;