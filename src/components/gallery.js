import React, { useState } from "react";
import "./gallery.css";
import CloseIcon from "@mui/icons-material/Close";

function Gallery({ data }) {
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  };
  const food = [
    {
      id: 1,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/food/fo2_8MU7M85x6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881194053",
    },
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/food/fo1_XrSl4HmsL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881190530",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/food/fo3_lnx6BzU_x.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881186563",
    },
    {
      id: 4,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/food/fo4_gSxUObtYa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881182798",
    },
  ];
  return (
    <div>
      <div className={model ? "model_open" : "model"}>
        <img src={tempingSrc} />
        <CloseIcon onClick={() => setModel(false)}></CloseIcon>
      </div>
      {data ? (
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }} alt="" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="gallery">
          {food.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Gallery;
