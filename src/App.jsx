import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Player from "./pages/Player";
import { useUser } from "./context/UserContext";

const App = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  useEffect(() => {
    if (user && window.location.pathname === "/") {
      navigate("/home");
    }
  }, [user, navigate]);
  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Landing />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/home" element={user ? <Home /> : <Landing />} />
        <Route path="/player/:id" element={user ? <Player /> : <Landing />} />
      </Routes>
    </>
  );
};

export default App;
