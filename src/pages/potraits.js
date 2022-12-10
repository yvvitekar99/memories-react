import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "../components/gallery";

import { setRender } from "../reduxToolkit/callSlice";
function Potraits() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setRender(false))
  },[])
  const potraits = [
    {
      id: 1,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot9_b7xg94502.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881223961",
    },
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot8_XERZJykGgn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881220394",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/comm_fit1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881025571",
    },
    {
      id: 4,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/comm_fit2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881021898",
    },
    {
      id: 5,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/comm_fit3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881018151",
    },
    {
      id: 6,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/comm_fit4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881014342",
    },
    {
      id: 7,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/comm_fit5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881011178",
    },
    {
      id: 8,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880952294",
    },
    {
      id: 9,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880948489",
    },
    {
      id: 10,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880944894",
    },
    {
      id: 11,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880940785",
    },
    {
      id: 12,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880937116",
    },
    {
      id: 13,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880933261",
    },
    {
      id: 14,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/pot1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661880929645",
    },
    {
      id: 15,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/1661879247819_Pz3GQT5-QR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884389031",
    },
    {
      id: 16,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/1661877088349_lgbXmZvpv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884388871",
    },
    {
      id: 17,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/1661882093508_aDObZizSI6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884389225",
    },
    {
      id: 18,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/1661877580233_gL1Hp31idI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884388989",
    },
    {
      id: 19,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/1661877636390_PeM4aQKfg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884389103",
    },
    {
      id: 20,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/1661876909998_Vf51Ms39tG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884389320",
    },
    {
      id: 21,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/1661876970981_qQbMaehFm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884387906",
    },
    {
      id: 22,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/IMG_5079_ygJIRlhlG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670698305296",
    },
    {
      id: 23,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/IMG_5065_xRMWBHz-8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670698305271",
    },
    {
      id: 24,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/potraits/IMG_5083_h8SUA0Uq1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670698305230",
    },
  ];
  return (
    <div>
      <Gallery data={potraits} />
    </div>
  );
}

export default Potraits;
