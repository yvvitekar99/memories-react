import React, { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "@mui/material";
import { useSelector } from "react-redux";
const Call = () => {
  const { isRender } = useSelector((state) => state.callRedux);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div className="call">
      {width < 448 && isRender ? (
        <Link href="tel:+919156985861">
          <CallIcon
            sx={{
              color: "white",
              zIndex: 8,
              backgroundColor: "green",
              bottom: "10%",
              right: "5%",
              position: "fixed",
              borderRadius: "50%",
              scale: "200%",
              ":hover": { cursor: "pointer" },
            }}
          />
        </Link>
      ) : null}
    </div>
  );
};

export default Call;
