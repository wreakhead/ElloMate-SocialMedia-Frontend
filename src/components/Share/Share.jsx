import { EmojiEmotions, Label, PermMedia, Room, Send } from "@material-ui/icons";
import "./Share.css";

function Share() {
  return (
    <div className="share">
      <div className="shareWrap">
        <div className="shareTop">
          <img
            src="https://th.bing.com/th/id/OIP.7HL30kC9kYuWeVKWbV5soQHaEK?pid=ImgDet&rs=1"
            alt=""
            className="shareImg"
          />
          <input placeholder="post somthing..." className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Upload</span>
            </div>
            <div className="shareOption">
              <Label className="shareIcon" htmlColor="#795548" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room className="shareIcon" htmlColor="#00897b" />
              <span className="shareOptionText">Where</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon" htmlColor="#f9a825" />
              <span className="shareOptionText">Feeling</span>
            </div>
            <div className="shareOption">
              <button className="shareButton">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
