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
        https://ik.imagekit.io/ngamedata/MBS%20Black_zUU4yUq_7.png?updatedAt=1754099353776"
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

