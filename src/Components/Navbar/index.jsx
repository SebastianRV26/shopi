// import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import CartIcon from "../../Assets/CartIcon";

const Navbar = () => {
  const { count, openCheckOutSideMenu } = useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men-clothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {"Men's clothing"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women-clothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {"Women's clothing"}
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li> */}
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">dev@sebasrv.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <button className="flex items-center" onClick={openCheckOutSideMenu}>
            <CartIcon />
            <div>{count}</div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
