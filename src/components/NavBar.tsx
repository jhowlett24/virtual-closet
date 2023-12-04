import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../CSS/Navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="header">
      <p>My Virtual Wardrobe</p>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/closet">My Closet</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/random">Randomize Outfits</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/inspiration">Inspiration</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/signup" onClick={handleLogOut}>
            {" "}
            Logout{" "}
          </Link>{" "}
        </li>
        {/* <li> <Link to='/favorites'>Favorite Fits</Link> </li> */}
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#FFC0CB" }} />
        ) : (
          <FaBars size={20} style={{ color: "#FFC0CB" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
