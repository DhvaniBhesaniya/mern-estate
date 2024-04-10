import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import About from './pages/About';
import Signup from './pages/Signup';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>

    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
