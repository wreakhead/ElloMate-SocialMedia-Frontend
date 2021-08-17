import Feed from "../../components/Feed/Feed";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Profile.css";

import React from "react";

import { useContext } from "react";
import { Context } from "../../context/Context";

function Profile() {
  const { user } = useContext(Context);

  return (
    <div>
      <Navbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user?.coverPicture}
                alt={user?.username}
                className="profileCoverImg"
              />
              <img
                src={user?.profilePicture}
                alt={user?.username}
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileInfoDescribe">{user?.describe}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
