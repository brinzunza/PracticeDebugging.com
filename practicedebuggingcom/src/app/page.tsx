"use client";

import React from 'react';
import Header from "../components/header"
import Welcome from "../pages/welcome"
import Login from "../pages/login"
import About from "../pages/about"
import Learn from "../pages/learn"
import Practice from "../pages/practice"
import Account from "../pages/account"
import Problem from "../pages/problem"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProblemCard from "../components/problem_card";

export default function Home() {
  return (
    <>
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      </Router>
    </>
  );
}