import React from "react";
import "./homepage.css";
import image1 from "./perpus1.jpeg";
import image2 from "./perpus4.jpg";
import image3 from "./perpus3.jpg";

const HomePage = () => {
  return (
    <div className="content">
      <h1 className="text">About Us</h1>
      <p>Linebiry adalah perpustakaan online yang menyediakan buku buku yang tersedia di offline store </p>
      <img className="foto1" src={image1} alt="" />
      <img className="foto2" src={image2} alt="" />
      <img className="foto3" src={image3} alt="" />
      <p>Tertarik dengan Linebiry?, AYO!!! Daftar menjadi member kami</p>
      <a href="./Member">
        <button className="button">Join as member</button>
      </a>
    </div>
  );
};

export default HomePage;
