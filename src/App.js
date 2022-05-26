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
import Navbar from "./Navbar";
import styled from "styled-components"

const PageWrapper = styled.div`
  display: flex;
`;


function App() {
    return (
        <Router>
            <PageWrapper>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create" element={<CreateRecipeWrapper/>}/>
                </Routes>
            </PageWrapper>
        </Router>
    );
}

export default App;
