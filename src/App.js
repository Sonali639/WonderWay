import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Tourlist from './Components/tour-list/Tourlist';
import Login from './Components/Login/Login';
import TourDeatils from './Components/Tour-Deatils/TourDeatils';
import Wishlist from "./Components/tour-list/Wishlist"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<Tourlist />} />
        <Route path="login" element={<Login />} />
        <Route path="tourdetails" element={<TourDeatils />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
