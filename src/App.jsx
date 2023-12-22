import { Route, Routes } from "react-router-dom";
import "./App.css";
import CubeContainer from "./components/CubeContainer";
import XRCubeContainer from "./components/xr/XRCubeContainer";

function App() {
  return <Routes>
    <Route path="/" element={<div>Hello main page</div>} />
    <Route path="/cube" element={<CubeContainer />} />
    <Route path="/xrcube" element={<XRCubeContainer />} />
  </Routes>;
}

export default App;
