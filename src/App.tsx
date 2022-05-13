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

function App() {
  return (
      <Router>
          <Navbar/>
          <SlideRoutes>
            <Route path={"/"} element={<PageHome/>}/>
            <Route path={"/characters"} element={<PageCharacters/>}/>
            <Route path={"/character/:id"} element={<PageCharacter/>}/>
            <Route path={"/favourite-characters"} element={<PageFavouriteCharacters/>}/>
            {/*<Route path={"products"} element={<Products/>}/>*/}
            {/*<Route path={"cookie"} element={<Cookie/>}/>*/}
            {/*<Route path={"account-data"} element={<AccountData/>}/>*/}
            {/*<Route path={"subscriptions"} element={<Subscriptions/>}/>*/}
            {/*<Route path={"contact"} element={<Contact/>}/>*/}
            {/*<Route path={"faq"} element={<Faq/>}/>*/}
            {/*<Route path={"delete-account"} element={<DeleteAccount/>}/>*/}
            {/*<Route path={"settings"} element={<Settings/>}/>*/}
            {/*<Route path={"sign-in"} element={<SignIn/>}/>*/}
            {/*<Route path={"sign-up"} element={<SignUp/>}/>*/}
            {/*<Route path={"forgot-password"} element={<ForgotPassword/>}/>*/}
          </SlideRoutes>
        {/*<Footer/>*/}
      </Router>
  );
}

export default App;
