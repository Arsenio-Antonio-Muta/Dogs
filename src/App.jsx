// @ts-nocheck
import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/login/Login"
import User from "./components/User/User"
import { UserStorage } from "./UserContext"

const App = () => {

  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="conta/*" element={<User />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
