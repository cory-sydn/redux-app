import { Avatar } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const name = useSelector((state) => state.user.userInfo.name)
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Redux App</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        {name && 
          <div className="navbarRight" >
            <img
              className="avatar"
              src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <span className="navbarName">{name}</span>
            <ArrowDropDown />
          </div>
        }
        {!name &&
          <div className="navbarRight" >
            <Avatar className="avatar" src="/broken-image.jpg" />
            <span className="navbarName" fontSize="12px" >Access</span>
            <ArrowDropDown />
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;