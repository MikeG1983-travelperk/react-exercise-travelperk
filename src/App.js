import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home.js"
import CreateRecipeWrapper from "./CreateRecipeWrapper";

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create" element={<CreateRecipeWrapper/>}/>
                </Routes>
            </Router>
    );
}

export default App;
