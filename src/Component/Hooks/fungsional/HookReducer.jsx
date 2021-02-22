import React, { useReducer } from "react";
import { Col, Row, Container, Card, Button, CardImg } from "reactstrap";

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'tambah':
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal:state.hargasatuan + (state.hargasatuan* state.jumlah)
      };
    case 'kurang':
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal:(state.hargasatuan* state.jumlah) - state.hargasatuan
      };
    default:
      return state;
  }
};

function HookReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
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
          <h3>Rp. {count.hargasatuan}</h3>
          <br />
          <Row>
            <Col>
              <Button onClick={() => dispatch({type:'kurang'})}>-</Button>
            </Col>
            <Col>{count.jumlah}</Col>
            <Col>
              <Button onClick={() => dispatch({type:'tambah'})}>+</Button>
            </Col>
          </Row>
        <br />
          <Button color="success">{count.hargatotal}</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HookReducer;
