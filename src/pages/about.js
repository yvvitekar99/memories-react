import { Call } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRender } from "../reduxToolkit/callSlice";

function About() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setRender(true))
  },[])
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="font-Dancing text-5xl mb-[60px] mt-[50px]">
          About Me
        </div>
        <div className="m-[20px]">
          <img
            className="rounded-[5%]"
            src="https://ik.imagekit.io/ngamedata/memories/giii_pXBMYESrF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661929208500"
            alt="potriat"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="max-w-[1000px] m-[20px] text-xl font-Oswald	">
            Talking About Yourself Is A Bit Difficult. Anyway Hello, Sanket
            Patwe Here A Photographer By Professional{" "}
          </p>
          <p className="max-w-[1000px] m-[20px] text-xl font-Oswald	">
            I Like Traveling and Exploring Various Types Of Nature Colours.
            Largely Inspired By Nature And Old Heritage Points
          </p>
          <p className="max-w-[1000px] m-[20px] text-xl font-Oswald	">
            I Have Completed My Graduation in Arts And Completed The Photography
            Diploma Course From Fergusson College, Pune in 2019
          </p>
          <p className="max-w-[1000px] m-[20px] text-xl font-Oswald">
            I Have Completed Various Types Of Assignment Like Commercial,
            Portrait, Wedding And More
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
