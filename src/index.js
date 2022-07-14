import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./container/landingpage/Index";
import InfoProfil from "./container/infoProfil/Index";
import Home from "./container/home/index";
import SellerDaftarJual from "./container/sellerDaftarJual/index";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import SellerHalamanProduk from "./container/SellerHalamanProduk/index";
import FormInfo from "./components/FormInfo";
import InfoProduk from "./container/infoProduk/index";
import Buyer from "./container/Buyer/index";
import InfoPenawar from "./container/infopenawar/index";
import DaftarJualEmpty from "./container/DaftarjualEmpty/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/infoproduk" element={<InfoProduk />} />
      <Route path="/infoprofil" element={<InfoProfil />} />
      <Route path="/halamanproduk" element={<SellerHalamanProduk />} />
      <Route path="/daftarjual" element={<SellerDaftarJual />} />
      <Route path="/forminfo" element={<FormInfo />} />
      <Route path="/buyer" element={<Buyer />} />
      <Route path="/infopenawar" element={<InfoPenawar />} />
      <Route path="/daftarjualempty" element={<DaftarJualEmpty />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
