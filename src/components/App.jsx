import { Routes, Route} from "react-router-dom";
import Login from './Login';
import Sign_up from './Sign_up';
import Recovery_password from './Recovery_password';
import Reset_password from './Reset_password';
import Index from "./Index";
import Shop from "./Shop";
import Confirmation from "./Confirmation";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Sign_up" element={<Sign_up />} />
                <Route path="/Recovery_password" element={<Recovery_password />} />
                <Route path="/Reset_password" element={<Reset_password />} />
                <Route path="/Index" element={<Index />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Confirmation" element={<Confirmation/>} />
            </Routes>
        </div>
    );
}

export default App;