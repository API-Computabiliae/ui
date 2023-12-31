import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Login from './containers/login';
import Chat from './containers/Chat';

 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/chat" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}
