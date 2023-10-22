// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/ema-john/">Shop</Link>
        <Link to="/ema-john/orders">Orders</Link>
        <Link to="/ema-john/login">Login</Link>
        <Link to="/ema-john/inventory">Inventory</Link>
      </div>
    </nav>
  );
};

export default Header;
