import React, { useState } from "react";
import TampilComp from "./TampilComp";

const Hooks = () => {
  const [jumlah, tambahJumlah] = useState(0);
  //login
  const [dataLogin,setDatalogin]=useState({username:'Ranto',token:'123abc',isLogin:true})

  //cek kondisi sudah login atau belum
  let tampil;

  if(dataLogin.isLogin){
    tampil=<TampilComp username={dataLogin.username} fungsi={tambahJumlah.bind(this)} jumlah={jumlah} />
  }else{
    tampil=<TampilComp username='Maaf anda belum login' disabled={true} />
  }
  return (
    <div>
      {tampil}
      {/* <h2>{jumlah}</h2>
      <button onClick={() => setJumlah(jumlah + 1)}>tambah</button> */}
    </div>
  );
};

export default Hooks;
