import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "../components/gallery";

import { setRender } from "../reduxToolkit/callSlice";
function PreWed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRender(false));
  }, []);
  const pre_couple = [
    {
      id: 1,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/1661881902801_ufI8nkmja.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884357761",
    },
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881152508",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople8_L1I9_RuFC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881079573",
    },
    {
      id: 4,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881075975",
    },
    {
      id: 5,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_couple4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881071980",
    },
    {
      id: 6,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople7_vX9pxF3dy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881068198",
    },
    {
      id: 7,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople6__x3HAbxWq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881064671",
    },
    {
      id: 8,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople5_1usZKNpzD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881060937",
    },
    {
      id: 9,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople9_Ne7XaQqZn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881056987",
    },
    {
      id: 10,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/0F1A8513_31RAjCMOi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670699155312",
    },
    {
      id: 11,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/0F1A8973__WgQi4HYV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670699151839",
    },
    {
      id: 12,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/0F1A8670_f3CiAIUz2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670699148388",
    },
    {
      id: 13,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/0F1A9181_9zAa43WGpG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670699140567",
    },
    {
      id: 14,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/pre_couple/0F1A8616_AcMErrCV7W.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670699136685",
    },
    
  ];
  return (
    <div>
      <Gallery data={pre_couple} />
    </div>
  );
}

export default PreWed;
