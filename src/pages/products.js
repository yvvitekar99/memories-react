import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "../components/gallery";
import { setRender } from "../reduxToolkit/callSlice";
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRender(false));
  }, []);
  const baby = [
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/products/IMG_9751_IbKJAtwsD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670698501421",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/products/IMG_9765_AG7YLShwA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670698501328",
    },
    {
      id: 4,
      imgSrc:
        "https://ik.imagekit.io/ngamedata/memories/products/IMG_9816_KA6KkT2Oc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670698501303",
    },
  ];
  return (
    <div>
      <Gallery data={baby} />
    </div>
  );
}

export default Products;
