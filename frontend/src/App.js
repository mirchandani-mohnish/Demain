import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import Suggestions from "./components/Suggestions";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Navbar setPage={setPage} page={page} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/suggestions" element={<Suggestions />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
