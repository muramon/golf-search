import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Detail from "./components/Detail";


export const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}