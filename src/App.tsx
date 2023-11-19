import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./Pages/Discover/Discover"
import Models from "./Pages/Models/Models";



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