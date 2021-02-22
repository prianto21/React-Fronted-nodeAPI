import React from "react";
import { Row, Container } from "reactstrap";
import RowProduct from "./RowProduct";

function ProductComp() {
  return (
    <Container>
      <Row>
        <RowProduct />
        <RowProduct />
        <RowProduct />
      </Row>
    </Container>
  );
}

export default ProductComp;
