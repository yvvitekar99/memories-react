import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "../components/gallery";

import { setRender } from "../reduxToolkit/callSlice";
function Food() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setRender(false))
  },[])
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
      <Gallery data={food} />
    </div>
  );
}

export default Food;
