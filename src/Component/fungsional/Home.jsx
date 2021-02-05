import React from "react";
import Produk from "../class/Produk";
// import Blog from "./Blog";

const Home = () => {
  return (
    <div>

      <Produk stock="10" nama="MacBook Pro" harga="15000000" />
      <Produk stock="14" nama="MacBook Pro series 10" harga="85000000" />
      <Produk stock="16" nama="MacBook Pro seri A" harga="45000000" />
      <Produk stock="19" nama="MacBook Pro seri B" harga="25000000" />
      <Produk stock="100" nama="MacBook Pro spesial jkt 48" harga="50000000" />
      <Produk stock="50" nama="Asus" harga="45000000" />
      {/* <Blog
        tanggal="02 jun 2020"
        judul="Teknologi Blockchain"
        summary="lorem is book desication.."
      />

      <Blog
        tanggal="04 jun 2020"
        judul="Teknologi Masa Depan"
        summary="lorem is book desication.."
      />

      <Blog
        tanggal="02 jun 2020"
        judul="Teknologi Web"
        summary="lorem is book desication.."
      /> */}
    </div>
  );
};

export default Home;