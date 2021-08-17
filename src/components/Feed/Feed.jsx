import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../context/Context";
import Posts from "../Posts/Posts";
import Share from "../Share/Share";
import "./Feed.css";
function Feed() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`feed/feeds/${user._id}`);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    getPosts();
  }, [user._id]);
  return (
    <div className="feed">
      <div className="feedWrap">
        <Share />
        {posts?.map((p) => {
          return <Posts key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
