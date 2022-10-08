import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "../components/gallery";

import { setRender } from "../reduxToolkit/callSlice";
function Maternity() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setRender(false))
  },[])
  const maternity = [
    {
      id: 1,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/maternity/mat4_oEak0voaS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880780702",
    },
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/maternity/mat6_xYoY0izgx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880777085",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/maternity/mat1_NRtv-LXyp5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880772997",
    },
    {
      id: 4,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/maternity/mat2_yySx6MD_R7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880769365",
    },
    {
      id: 5,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/maternity/mat5_D4B-LkPBc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880761804",
    },
  ];
  return (
    <div>
    
      <Gallery data={maternity} />
    </div>
  );
}

export default Maternity;
