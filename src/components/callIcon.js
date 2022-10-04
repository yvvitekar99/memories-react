import React, { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import "./Call.css";
import { Link } from "@mui/material";
const Call = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  useEffect(() => {
    console.log(width);
  }, [width]);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div className="call">
      {width < 448 ? (
        <Link href="tel:+919156985861">
          <CallIcon
            sx={{
              color: "green",
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
