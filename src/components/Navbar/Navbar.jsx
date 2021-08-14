import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">ElloMate</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="search..." className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLink">
          <span className="navbarLink">Home</span>
          <span className="navbarLink">Feeds</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.bD2wjPmvukCQUWgmPqfF4AHaHa?pid=ImgDet&rs=1"
          alt="profile"
          className="navbarImg"
        />
      </div>
    </div>
  );
}

export default Navbar;
