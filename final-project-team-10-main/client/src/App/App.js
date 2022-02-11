import React from "react";
import Rent from "./pages/Rent/Rent";
import Sell from "./pages/Sell/Sell";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Item from "./pages/Item/Item";

//Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/search" element={<Home />} />
          <Route path="/items/:id" element={<Item/>} />
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
