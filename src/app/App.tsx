import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../menu/Menu";
import Wotlk from "../timers/Wotlk";
import ZulAman from "../timers/ZulAman";

import style from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={style.container}>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="ZulAman" element={<ZulAman />} />
          <Route path="wotlk" element={<Wotlk />} />
          {/* TODO: Add 404 page */}
          <Route path="*" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
