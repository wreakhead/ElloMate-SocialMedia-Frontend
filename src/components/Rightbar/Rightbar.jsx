import { Cake } from "@material-ui/icons";
import React from "react";
import "./Rightbar.css";

function Rightbar({ profile }) {
  const homePage = () => {
    return (
      <>
        <div className="birthdays">
          <Cake className="cakeIcon" />
          <span className="bdayText">people with bdays today</span>
        </div>
        <img
          src="https://laughingsquid.com/wp-content/uploads/2020/01/Rick-and-Morty-Pringles-Super-Bowl-Ad.gif?w=640"
          alt=""
          className="adds"
        />
        <ul className="friendList">
          <li className="friend">
            <div className="friendContainer">
              <div className="profileImg">
                <img
                  src="https://yt3.ggpht.com/a/AATXAJxky5bNqmYpunHNlCAu_5aTgRY9nPkCowB2eg=s900-c-k-c0xffffffff-no-rj-mo"
                  alt=""
                  className="friendImg"
                />
              </div>
              <span className="rightOnline"></span>
            </div>
            <span className="friendsName">morty</span>
          </li>
        </ul>
        <h4 className="onlineFriends">Online Friends</h4>
      </>
    );
  };

  const profilePage = () => {
    return (
      <>
        <h4 className="rightbarAbout">About</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarType">City:</span>
            <span className="rightbarValue">NYC</span>
          </div>
          <h4 className="rightbarAbout">Friends</h4>
          <div className="following">
            <div className="follower">
              <img
                src="https://th.bing.com/th/id/OIP.uGTVnz34LP8Aeuq9HZAsGwHaFy?pid=ImgDet&rs=1"
                alt=""
                className="followerImg"
              />
              <span className="followerName">Beth</span>
            </div>
            <div className="follower">
              <img
                src="https://th.bing.com/th/id/OIP.uGTVnz34LP8Aeuq9HZAsGwHaFy?pid=ImgDet&rs=1"
                alt=""
                className="followerImg"
              />
              <span className="followerName">Beth</span>
            </div>
            <div className="follower">
              <img
                src="https://th.bing.com/th/id/OIP.uGTVnz34LP8Aeuq9HZAsGwHaFy?pid=ImgDet&rs=1"
                alt=""
                className="followerImg"
              />
              <span className="followerName">Beth</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightWrap">{profile ? profilePage() : homePage()}</div>
    </div>
  );
}

export default Rightbar;
