import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nevbar from "./Pages/Nevbar";
import Hero from "./Pages/Hero";
import Sliders from "./Pages/Sliders";
import Menu from "./Pages/Menu";
import Form from "./Pages/Form";
import Breakfast from "./Pages/Breakfast";
import Lunch from "./Pages/Lunch";
import Scrool from "./Pages/Scrool";
import Beyond from "./component/Beyond";
import Catering from "./Pages/Catering";
import Gift from "./Pages/Gift";
import Marshandise from "./Pages/Marshandise";
import P from "./Pages/P";
const App = () => {
return (
    <BrowserRouter>
      <Nevbar />
      <Scrool/>
      <Routes>
        {/* Home Page: Is route par sari home ki cheezein dikhengi */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Sliders />
              <Menu />
              <Form />
            </>
          } 
        />

        {/* Breakfast Page: Is par sirf Breakfast dikhega */}
        <Route path="/breakfast-neutritional" element={<Breakfast />} />
        <Route path="/lunch-and-dinner-neutritionals" element={<Lunch/>}></Route>
        <Route path="/find-a-store"></Route>
        <Route path="/beyond-the-menu" element={<Beyond/>}></Route>
        <Route path="/catering" element={<Catering/>}></Route>
        <Route path="/gifts-cards" element={<Gift/>}></Route>
        <Route path="/marshandise" element={<Marshandise/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
