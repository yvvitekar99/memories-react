import { Call } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carousal from "./components/Carousal";
import { setRender } from "./reduxToolkit/callSlice";
import TestimonialCard from "material-testimonial-card";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRender(true));
  }, []);
  return (
    <div className="App flex flex-col justify-center items-center">
      <Carousal />
      <div className="flex flex-row justify-between">
        <div className="ml-[50px]">
        <TestimonialCard
        
        name={"John Smith"}
        image={
          "https://ik.imagekit.io/ngamedata/default-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658210003771"
        }
        content={
          "Wow! This testimonial card is so amazing! I would like to use it in my project!"
        }
        project={"Testimonial card"}
      />
        </div>
        <div className="ml-[50px]">
        <TestimonialCard
        
        name={"John Smith"}
        image={
          "https://ik.imagekit.io/ngamedata/default-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658210003771"
        }
        content={
          "Wow! This testimonial card is so amazing! I would like to use it in my project!"
        }
        project={"Testimonial card"}
      />
        </div>
        <div className="ml-[50px]">
        <TestimonialCard
        
        name={"John Smith"}
        image={
          "https://ik.imagekit.io/ngamedata/default-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658210003771"
        }
        content={
          "Wow! This testimonial card is so amazing! I would like to use it in my project!"
        }
        project={"Testimonial card"}
      />
        </div>
      </div>
    </div>
  );
}

export default App;
