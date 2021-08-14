import React from "react";
import Feed from "../../components/Feed/Feed";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import './Home.css'
function Home() {
  return (
    <div>
      <Navbar />
      <div className="HomeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
