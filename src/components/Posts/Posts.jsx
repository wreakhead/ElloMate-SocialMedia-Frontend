import { Favorite, FavoriteOutlined, MoreVert } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Posts.css";
import {format} from 'timeago.js'
import { Link } from "react-router-dom";

function Posts({ post }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`user/${post.userId}`);
      console.log(res.data);
      setUser(res.data);
    };
    getPosts();
  }, [post.userId]);

  return (
    <div className="posts">
      <div className="postsWrap">
        <div className="postsTop">
          <div className="postsTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture}
                alt=""
                className="postsProfileImg"
              />
            </Link>
            <span className="postsUsername">{user.username}</span>
            <span className="postsDate">{format(post.createdAt)}</span>
          </div>
          <div className="postsTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postsCenter">
          <span className="postsText">{post.describe}</span>
          <img src={post.image} alt="" className="postsImg" />
        </div>
        <div className="postsBottom">
          <div className="postsBottomLeft">
            <FavoriteOutlined htmlColor="#ff1744" className="heart" />
            <FavoriteBorderIcon className="heart" />
            <span className="likeCounter">{post.likes.length}</span>
          </div>
          <div className="postsBottomRight">
            <span className="commentCount">
              {post.comments?.length} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
