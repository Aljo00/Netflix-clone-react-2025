import React, { useEffect, lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useNavigate } from "react-router-dom";
const Landing = lazy(() => import("./components/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Player = lazy(() => import("./pages/Player"));
import { useUser } from "./context/UserContext";

const App = () => {

  const { user } = useUser();

  return (
    <>
      <ToastContainer theme="dark" />
      <Suspense
        fallback={
          <div className="text-white text-center mt-10">Loading...</div>
        }
      >
        <Routes>
          {/* <Route path="/" element={user ? <Home /> : <Landing />} /> */}
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
