import React, { useContext, useReducer } from "react";
import { Col, Row, Container, Card, Button, CardImg } from "reactstrap";
import {NavLink} from 'react-router-dom'
import { KeranjangContext } from "../../../App";

function HookReducer() {
//   const [count, dispatch] = useReducer(reducer, initialState);
const countContext=useContext(KeranjangContext)
  return (
    <Container>
      <Row>
        <Col xs="6">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeimg.com/640/480/arch"
              alt="Card image cap"
            />
          </Card>
        </Col>
        <Col xs="6">
          <h3>Action Figure Naruto</h3>
          <p>Harga</p>
          <h3>Rp. {countContext.KeranjangState.hargasatuan}</h3>
          <br />
          <p>Jumlah</p>
          <Row>
            <Col>
              <Button onClick={() => countContext.KeranjangDispatch({type:'kurang'})}>-</Button>
            </Col>
            <Col>{countContext.KeranjangState.jumlah}</Col>
            <Col>
              <Button onClick={() => countContext.KeranjangDispatch({type:'tambah'})}>+</Button>
            </Col>
          </Row>
        <br />
          <Button color="success">{countContext.KeranjangState.hargatotal}</Button>
          <br />
          <NavLink to="/tagihan">Tagihan Belanja</NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default HookReducer;
