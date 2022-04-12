import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import Suggestions from "./components/Suggestions";
import Login from "./components/Login";

function App() {
  // const [page, setPage] = useState();
  const page = 1;
  const setPage = (newPage) => {
    page = newPage;
  };

  return (
    <div className="App w-screen h-screen">
      <Navbar setPage={setPage} page={page} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
