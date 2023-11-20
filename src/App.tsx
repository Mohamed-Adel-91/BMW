import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from "./Pages/Discover/Discover"
import Models from "./Pages/Models/Models";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Models" element={<Models />} />
      </Routes>
    </Router>
  )
}

export default App