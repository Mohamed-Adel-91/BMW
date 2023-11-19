import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./components/Discover/Discover"
import Models from "./components/Models/Models";
// import Home from "./components/Home/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/Home" element={<Discover />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Models" element={<Models />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App