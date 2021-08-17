import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./Leftbar.css";

function Leftbar() {
  const { user } = useContext(Context);
  return (
    <div className="leftbar">
      <div className="leftbarWrap">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarIconText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="leftbarIconText">Chat</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarIconText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarIconText">Group</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarIconText">Bookmark</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarIconText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarIconText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarIconText">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="leftbarIconText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">more</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          
          <li className="leftbarFriend">
            <img
              src="https://yt3.ggpht.com/a/AATXAJxky5bNqmYpunHNlCAu_5aTgRY9nPkCowB2eg=s900-c-k-c0xffffffff-no-rj-mo"
              alt=""
              className="friendImg"
            />
            <span className="friendName">morty</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
