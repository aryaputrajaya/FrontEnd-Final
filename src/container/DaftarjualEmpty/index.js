import React from "react";
import NavbarMain from "../../components/navbar/NavbarMain";
import "./style.css";
import { FiBox, FiPlus } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import Card from "../../components/card/Index";
import NavbarMain2 from "../../components/navbar/NavbarMain2";

export default function DaftarJualEmpty() {
  return (
    <div>
      {/* ------Navbar------ */}
      <NavbarMain2 />
      {/* --------content-------- */}
      <div className="container-daftarjual">
        <p className="daftarjual">Daftar Jual Saya</p>
        {/* --------seller profile-------- */}
        <div className="profileseller-wrapper">
          <div className="seller-img">
            <img src={require("../../images/seller.png")} alt="profile" />
          </div>
          <div className="profile-content">
            <div className="profile-text">
              <div className="profile-name">Nama Penjual</div>
              <div className="profile-city">Kota</div>
            </div>
            <button className="profile-edit">Edit</button>
          </div>
        </div>
        {/* -------end seller profile------- */}
        {/* -------kategori------- */}
        <div className="cathegory-wrapper">
          <p>Kategori</p>
          <div className="cathegory-option">
            <div className="icon-text-option2">
              <FiBox className="icon-box-profile2" />
              <p>Semua Produk</p>
            </div>
            <FiChevronRight className="icon-box-chevron2" />
          </div>
          <div className="cathegory-option">
            <div className="icon-text-option2">
              <FiHeart className="icon-box-profile2" />
              <p>Diminati</p>
            </div>
            <FiChevronRight className="icon-box-chevron2" />
          </div>
          <div className="cathegory-option-last">
            <div className="icon-text-option2">
              <FiDollarSign className="icon-box-profile2" />
              <p>Terjual</p>
            </div>
            <FiChevronRight className="icon-box-chevron2" />
          </div>
        </div>
        {/* -------end kategori------- */}
        <div className="row">
          <div className="cardDaftarJual-wrapper2">
            <div className="card-product2">
              <div className="card-style2">
                <div className="add-card2">
                  <div className="add-card-wrapper2">
                    <div className="add-card-img-product2">
                      <FiPlus className="icon-plus2" />
                    </div>
                    <p className="add-product2">Tambah Produk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------end content------- */}
    </div>
  );
}
