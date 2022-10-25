import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import NotFound from "./Views/NotFound";
import Preview from "./Views/Preview";

function App() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Preview />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
