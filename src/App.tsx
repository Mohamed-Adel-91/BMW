import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./Pages/Discover/Discover";
import Models from "./Pages/Models/Models";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import SignUp from "./Components/SignUp/SignUp";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Discover} />
                <Route path="/Discover" Component={Discover} />
                <Route path="/Models" Component={Models} />
                <Route path="*" Component={PageNotFound} />
                <Route path="/SignUp" Component={SignUp} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
