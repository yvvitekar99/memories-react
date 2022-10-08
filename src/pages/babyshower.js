import React from "react";
import Gallery from "../components/gallery";

function BabyShower() {
  const babyShower = [
    {
      id: 1,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/Baby_shower/babyshower_1l8Ri8-iy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884330614",
    },
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/Baby_shower/mat8_B-7Zr1_9g.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881381205",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/Baby_shower/mat7_PTaWRFDRq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881377422",
    },
    {
      id: 4,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/Baby_shower/mat9_IyL0XcowE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881373447",
    },
  ];
  return (
    <div>
     
      <Gallery data={babyShower} />
    </div>
  );
}

export default BabyShower;
