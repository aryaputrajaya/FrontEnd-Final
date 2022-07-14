import React from "react";
import "./NavbarMain2.css";
import { FiList } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import product from "../../images/jam-tangan3.png";

export default function NavbarMain2() {
  return (
    <>
      <div className="navbar-main-style">
        <Link to="/home">
          <div className="logo-navbar" />
        </Link>
        <div className="search">
          <input type="text" placeholder="Cari di sini ..." name="search"></input>
          <img className="search-icon" src={require("../../images/fi_search.png")} />
        </div>
        {/* <button className='masuk'>
          <FiLogIn className='login-icon'/>
          <a>Masuk</a>
        </button> */}
        <div className="icon-navbar">
          <Link to="/daftarjual">
            <FiList className="icon-navbar-wh" />
          </Link>

          <Link to="/">
            <FiBell className="icon-navbar-wh" />
          </Link>

          {/* <div className="nav-item mx-1">
            <a href="#notification" className="nav-link">
              <FiBell className="icon-navbar-wh" />
            </a>
            <a href="#" id="notification"></a>
            <div className="notification-card">
              <div className="notification">
                <img src={product} alt="product" />
                <div className="title">
                  <p>Penawaran Produk</p>
                </div>
                <div className="date">
                  <p>20 Apr, 14:04</p>
                </div>
                <div className="detail">
                  <p>
                    Jam tangan casio
                    <br />
                    <br />
                    Rp 250.000
                    <br />
                    <br />
                    Ditawar Rp 200.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="notification">
            <img src={product} alt="product" />
            <div className="title">
              <p>Berhasil diterbitkan</p>
            </div>
            <div className="date">
              <p>19 Apr, 14:04</p>
            </div>
            <div className="detail">
              <p>
                Jam tangan casio
                <br />
                <br />
                Rp 250.000
              </p>
            </div>
          </div> */}

          <Link to="/infoprofil">
            <FiUser className="icon-navbar-wh" />
          </Link>
        </div>
      </div>
    </>
  );
}
