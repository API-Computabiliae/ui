import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Login from './containers/login';
// import {useDispatch, useSelector} from "react-redux";

 
export default function App() {

  // const logged = useSelector(state => state.AuthReducer.isAdmin);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}
