import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
export default function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to={"/"} className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                to={path}
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsNavShowing((prev) => !prev)}
          className="nav__toggle-btn"
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars className="svg" />}
        </button>
      </div>
    </nav>
  );
}
