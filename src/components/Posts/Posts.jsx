import { FavoriteOutlined, MoreVert } from "@material-ui/icons";

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Posts.css";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { IconButton } from "@material-ui/core";

function Posts({ post }) {
  const [user, setUser] = useState([]);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const { user: currentUser } = useContext(Context);
  const dataUrl = process.env.REACT_APP_DATA_URL;
  const url=dataUrl+post.image
 
  

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`user/${post.userId}`);
      // console.log(res.data);
      setUser(res.data);
    };
    getPosts();
  }, [post.userId]);

  const handleLike = () => {
    try {
      axios.put(`feed/${post._id}/like`, { userId: currentUser._id });
    } catch (error) {}

    console.log("clicked");
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="posts">
      <div className="postsWrap">
        <div className="postsTop">
          <div className="postsTopLeft">
            <Link to={`/profile`}>
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
          <img src={url} alt="" className="postsImg" />
        </div>
        <div className="postsBottom">
          <div className="postsBottomLeft">
            <IconButton onClick={handleLike}>
              <FavoriteOutlined htmlColor="#ff1744" className="heart" />
            </IconButton>

            {/* <FavoriteBorderIcon className="heart" /> */}
            <span className="likeCounter">{like}</span>
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
