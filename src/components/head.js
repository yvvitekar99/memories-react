import { Link } from "@mui/material";
import React from "react";
import "./head.css";
function HeadMain() {
  return (
    <div className="w-[100%]">
      <div className="m-2 flex flex-col items-center justify-center">
        <Link href="/" className="flex flex-col items-center justify-center">
          <img
            className="image"
            src="
        https://ik.imagekit.io/ngamedata/final_ec3IUyjhZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661680928438"
          />
        </Link>

        <div className="mt-[10px] text-2xl h-[50px] mb-[50px] font-Oswald">
          Vision Ours, Memories Yours
        </div>
      </div>

      <br />
    </div>
  );
}

export default HeadMain;
