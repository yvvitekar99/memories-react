import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "../components/gallery";
import { setRender } from "../reduxToolkit/callSlice";
function Baby() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRender(false));
  }, []);
  const baby = [
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/1661878745419_lP9ta9wgR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884294590",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/1661877826199_6AtRo_vK5T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884294724",
    },
    {
      id: 4,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/1661878709298_mjyBhjjS1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884293826",
    },
    {
      id: 5,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/1661877892357_Xnn8q8iX3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884294213",
    },
    {
      id: 6,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/1661878608337_7kZoBXhw5n.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884294551",
    },
    {
      id: 7,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/baby2_f0Bwrvmdj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881257706",
    },
    {
      id: 8,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/IMG_4502_kK47V99EP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670697651444",
    },
    {
      id: 9,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/IMG_5314_PRn0ylFF2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670697651389",
    },
    {
      id: 10,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/baby/IMG_5304_8fP5gT6Dp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670697651333",
    },
  ];
  return (
    <div>
      <Gallery data={baby} />
    </div>
  );
}

export default Baby;
