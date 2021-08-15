import Feed from "../../components/Feed/Feed";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Profile.css";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="https://th.bing.com/th/id/OIP.Jfz8rdraYHLR0iqx9uzZOAHaEK?pid=ImgDet&rs=1"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="https://yt3.ggpht.com/a/AATXAJxky5bNqmYpunHNlCAu_5aTgRY9nPkCowB2eg=s900-c-k-c0xffffffff-no-rj-mo"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Imran</h4>
              <span className="profileInfoDescribe">yo yo</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
