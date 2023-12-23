import { Route, Routes } from "react-router-dom";
import "./App.css";
import CubeContainer from "./components/CubeContainer";
import XRCubeContainer from "./components/xr/XRCubeContainer";
import Homepage from "./components/Homepage";

function App() {
  return <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/cube" element={<CubeContainer />} />
    <Route path="/xrcube" element={<XRCubeContainer />} />
  </Routes>;
}

export default App;
