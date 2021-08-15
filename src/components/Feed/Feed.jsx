import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Posts from "../Posts/Posts";
import Share from "../Share/Share";
import "./Feed.css";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`feed/feeds/611943dd0fb3c0511475504b`);
      setPosts(res.data);
    };
    getPosts();
  }, []);
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
