import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./style.css";
import arrow from "../../images/fi_arrow-left.png";
// import NavbarMain from '../../components/navbar/NavbarMain'
import { FiPlus } from "react-icons/fi";

export default function InfoProfil() {
  return (
    <div>
      <Navbar />
      <div className="back-arrow2">
        <img src={arrow} width="100%" alt="" />
      </div>
      <div className="form-produk">
        <div className="formulir-info-produk">
          <label className="label-info-produk">Nama Produk</label>
          <input type="text" className="input-text-produk" name="Nama" />
          <label className="label-info-produk">Harga Produk</label>
          <input type="text" className="input-text-produk" name="Rp 0,00" />
          <label className="label-info-produk">Kategori</label>
          <select className="input-text-produk" aria-label="Pilih Kategori">
            <option selected>Pilih Kota</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label className="label-info-produk-alamat">Deskripsi</label>
          <textarea className="input-text-produk" class="form-control" rows="3" placeholder="Contoh: Jalan Ikan Hiu 33"></textarea>
          <label className="label-info-produk">Foto Produk</label>
          <div className="fotoProduk">
            <FiPlus className="plus-icon" />
          </div>
          <div className="button">
            <button className="button-preview-produk">Preview</button>
            <button className="button-simpan-produk">Terbitkan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
