import { Call } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carousal from "./components/Carousal";
import { setRender } from "./reduxToolkit/callSlice";

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setRender(true))
  },[])
  return (
    <div className="App">
      <Carousal />
    

    </div>
  );
}

export default App;
