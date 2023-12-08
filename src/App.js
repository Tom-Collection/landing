import React from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
