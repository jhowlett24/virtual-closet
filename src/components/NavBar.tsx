import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/config";

const NavBar = () => {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="navbar bg-base-100 justify-between">
      <a className="font-bold normal-case text-xl underline">
        Virtual Wardrobe
      </a>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default NavBar;
