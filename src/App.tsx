import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import logo from './logo.svg';
import './App.scss';
import Navbar from "./components/Navbar";
import Home from "./pages/home";

// @ts-ignore
import SlideRoutes from 'react-slide-routes';
import PageHome from "./pages/home";
import PageCharacters from "./pages/characters";
import PageCharacter from "./pages/character";
import PageFavouriteCharacters from "./pages/favourite-characters";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
          <Navbar/>
          <SlideRoutes>
            <Route path={"/"} element={<PageHome/>}/>
            <Route path={"/characters"} element={<PageCharacters/>}/>
            <Route path={"/character/:id"} element={<PageCharacter/>}/>
            <Route path={"/favourite-characters"} element={<PageFavouriteCharacters/>}/>
          </SlideRoutes>
          <Footer/>
      </Router>
  );
}

export default App;
