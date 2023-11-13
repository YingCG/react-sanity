import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<AllPosts/>}/>
        <Route path="/:slug" element={<OnePost/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
