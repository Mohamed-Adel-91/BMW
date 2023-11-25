import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./Pages/Discover/Discover";
import Models from "./Pages/Models/Models";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Discover} />
                <Route path="/Discover" Component={Discover} />
                <Route path="/Models" Component={Models} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
