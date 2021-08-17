import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import "./Share.css";

function Share() {
  const postText = useRef();
  const { user } = useContext(Context);

  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      userId: user._id,
      describe: postText.current.value,
    };

    if (file) {
      const formData = new FormData();
      const fileName = Date.now() + file.name;
      formData.append("name", fileName);
      formData.append("file", file);

      newPost.image = fileName;

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      try {
        await axios.post("/upload", formData);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post("/feed", newPost);
    } catch (error) {}
  };

  return (
    <div className="share">
      <div className="shareWrap">
        <div className="shareTop">
          <img src={user.profilePicture} alt="" className="shareImg" />
          <input
            placeholder="post somthing..."
            className="shareInput"
            ref={postText}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Upload</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
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
              <button className="shareButton" type="submit">
                Share
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Share;
