"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Welcome from "../pages/welcome";
import Login from "../pages/login";
import About from "../pages/about";
import Learn from "../pages/learn";
import Practice from "../pages/practice";
import Account from "../pages/account";
import Problem from "../pages/problem";
import Information from "../pages/information";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/login" element={<Login />} />
            <Route path="/problem/:id" element={<Problem />} />
            <Route path="/account" element={<Account />} />
            <Route path="/information" element={<Information title="Syntax" description="Learn about syntax" code="example code" />} />
          </Routes>
        </div>
      </BrowserRouter>  
    </GoogleOAuthProvider>
  );
}
