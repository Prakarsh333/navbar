import Navbar from "./component/Navbar";
import About from "./component/About";
import { Route,Routes } from "react-router-dom";
import SideBar from "./component/SideBar";
import Draft from "./pages/Draft";
import RaisedToStore from "./pages/RaisedToStore";
import ApprovedByHod from "./pages/ApprovedByHod";
import IssuedByStore from "./pages/IssuedByStore";
import History from "./pages/History";

function App() {
  return (
    <div class="flex">
      <SideBar />
      
      <div class="flex justify-center items-center w-full text-4xl">

      <Routes>
        <Route path="/"/>
        <Route path="/Draft" element={<Draft />} />
        <Route path="/RaisedToStore" element={<RaisedToStore />} />
        <Route path="/ApprovedByHOD" element={<ApprovedByHod />} />
        <Route path="/IssuedByStore" element={<IssuedByStore />} />
        <Route path="/History" element={<History />} />
      </Routes>

      </div>
      
    </div>
  );
}

export default App;
