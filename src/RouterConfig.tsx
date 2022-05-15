import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Detail from "./components/Detail";
import Searchresults from "./components/Searchresults";


export const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="detail" element={<Detail />} />
        <Route path="searchresults" element={<Searchresults />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}