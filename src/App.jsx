import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import { Route, Routes } from "react-router-dom";
import Message from "./pages/Message/Message";
import HomePage from "./pages/HomePage/HomePage";
import { Login } from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

function App() {
  return(
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/*' element={<Authentication/>}/>
    </Routes>
  )
}

export default App;
