import React from "react";
import Gallery from "../components/gallery";
function Jewellery() {
  const jewellery = [
    {
      id: 1,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/jewellary/1661878888679_W34WHdPKg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884220985",
    },
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/jewellary/1661877312052_GM43HLeV1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884109457",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/jewellary/1661877401399_9k8prJ6Nd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884108681",
    },
    {
      id: 4,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/jewellary/1661877360377_3npfTNkVr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884109338",
    },
    {
      id: 5,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/jewellary/1661877484586_Jnp6O-re-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884108501",
    },
    {
      id: 6,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/jewellary/1661877185086_SeeDEiRoJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884107683",
    },
    {
      id: 7,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/jewellary/jw9_DDAGgVwxw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881286422",
    },
    {
      id: 8,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/jewellary/1661877236352_wJA5fp01G.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884107642",
    },
  ];
  return (
    <div>
     
      <Gallery data={jewellery} />
    </div>
  );
}

export default Jewellery;
