import React, { useEffect, useState } from "react";
// import "../style.css";
import banner from "../../../src/images/SecondHand.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Login() {
  let [showPassword, setShowPassword] = useState(false);
  let [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  // useEffect(() => {
  //   setName("");
  // }, []);

  const checkShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleName = (name) => {
    setName(name);
  };
  return (
    <div className="wrapperLogin">
      <div className="secondhand-img-login">
        <img src={banner} width="100%" alt="" />
      </div>
      {/* {showModal ? <p>modal buka</p> : <p>ini modal tutup</p>}
      <button onClick={() => setShowModal(!showModal)}>modal</button> */}
      <div className="form-login">
        <h3 className="title-text-login">Daftar</h3>
        <label className="label-info-login">Nama</label>
        <input type="text" className="input-text-login" placeholder="Nama Lengkap" name="Nama" onChange={(e) => handleName(e.target.value)} />
        {/* {name} */}
        <label className="label-info-login">Password</label>
        <div>
          <input type={showPassword ? "password" : "text"} className="input-text-login" placeholder="Masukkan password" name="password" onChange={(e) => setPassword(e.target.value)}>
            {/* add icon eyes*/}
          </input>
          {/* {password} */}
          <button className="icon-password-login">{showPassword ? <BsEye onClick={checkShowPassword} /> : <BsEyeSlash onClick={checkShowPassword} />}</button>
        </div>
        <Link to="/home">
          <button className="button-simpan-login">Masuk</button>
        </Link>
        <label className="text-login">
          <h6>
            Belum punya akun?{" "}
            <Link to="/register">
              <span style={{ color: "#7126B5" }}>Daftar di sini</span>
            </Link>
          </h6>
        </label>
      </div>
    </div>
  );
}
