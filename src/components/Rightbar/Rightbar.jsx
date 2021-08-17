import { Cake } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./Rightbar.css";

function Rightbar({ profile }) {
  const { user } = useContext(Context);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const followerList = await axios.get("user/followers/" + user._id);
        setFollowers(followerList.data);
        console.log(followers);
      } catch (error) {
        console.log(error);
      }
    };

    getFriends();
  }, []);
  console.log(followers);

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
        <h4 className="onlineFriends">Online Friends</h4>
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
      </>
    );
  };

  const profilePage = () => {
    return (
      <>
        <h4 className="rightbarAbout">About</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarType">Relationship:</span>
            <span className="rightbarValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : user.relationship === 3
                ? "Complicated"
                : ""}
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarType">City:</span>
            <span className="rightbarValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarType">From:</span>
            <span className="rightbarValue">{user.from}</span>
          </div>
          <h4 className="rightbarAbout">Followers</h4>
          <div className="following">
            {followers.map((follower) => {
              return (
                <div className="follower" key={follower._id}>
                  <img
                    src={follower.profilePicture}
                    alt=""
                    className="followerImg"
                  />
                  <span className="followerName">{follower.username}</span>
                </div>
              );
            })}
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
