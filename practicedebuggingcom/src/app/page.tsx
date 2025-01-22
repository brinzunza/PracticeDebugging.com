"use client";

import Header from "../components/header"
import Welcome from "../pages/welcome"
import Login from "../pages/login"
import About from "../pages/about"
import Learn from "../pages/learn"
import Practice from "../pages/practice"
import Problem from "../pages/problem"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Router>
    </>
  );
}