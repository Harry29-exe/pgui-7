import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import PrivatePage from "./components/PrivatePage";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path="/protected" element={
                            <PrivateRoute>
                                <PrivatePage/>
                            </PrivateRoute>
                        }/>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
