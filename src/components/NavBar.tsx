import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../CSS/Navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //when Logout is clicked, handleLogOut() implements security 
  //so that you cannot access other pages without signing back in
  const handleLogOut = async () => {
    try {
      await signOut(auth); 
    } catch (error) {
      console.log(error.message);
    }
  };



  // NavBar is the header of each page with links to the following pages 
  // to allow for easy navigation through the website
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
      </ul>

      {/* Mobile version of NavBar is a hamburger/sidebar that displays all the options rather than a header*/}
      <div className="hamburger z-15" onClick={handleClick}>
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
