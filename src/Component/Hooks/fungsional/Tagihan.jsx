import React,{useContext} from "react";
import { Jumbotron, Button } from "reactstrap";
import { KeranjangContext } from "../../../App";
import { CartContext } from "../../../CartContext";

function Tagihan() {
    const countContext=useContext(KeranjangContext)

    const {value,setValue} =useContext(CartContext)
  return (
    <Jumbotron>
      <h1 className="display-3">Tagihan</h1>
      <p className="lead">
      {countContext.KeranjangState.jumlah}x Action Figure Naruto
      </p>
      <hr className="my-2" />
      <p>
      <h3>Rp.{countContext.KeranjangState.hargatotal}</h3>
      </p>
      <p className="lead">
        <Button color="primary" onClick={()=>setValue(value+1)}>lanjutlan pembayaran</Button>
      </p>
    </Jumbotron>
  );
}

export default Tagihan;
