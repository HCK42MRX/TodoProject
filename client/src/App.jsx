import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import AddTask from "./pages/AddTask/page";
import Home from "./pages/Home/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/add-task" element={AddTask()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
