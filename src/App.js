import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carousal from "./components/Carousal";
import Test from "./components/Test";
import { setRender } from "./reduxToolkit/callSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRender(true));
  }, []);
  return (
    <div className="App flex flex-col justify-center items-center">
      <Carousal />
      <div className="flex flex-row justify-between">
       <Test/>
      </div>
    </div>
  );
}

export default App;
