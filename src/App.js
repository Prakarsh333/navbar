import Navbar from "./component/Navbar";
import About from "./component/About";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
