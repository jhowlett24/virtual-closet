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
      <a className="font-bold normal-case text-4xl underline">
        Virtual Wardrobe
      </a>
      <button className="text-3xl" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default NavBar;
