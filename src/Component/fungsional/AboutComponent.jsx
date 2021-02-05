import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComponent from './CardComponent';
const AboutComponent=()=> {
    return (
        <div>
        <Jumbotron>
          <h1 className="display-3">About</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>

        <Container>
            <Row>
                <Col><CardComponent id="1" judul="Belajar React" tanggal="02-05-2021"/></Col>
                <Col><CardComponent id="2" judul="Belajar Redux" tanggal="04-05-2021"/></Col>
                <Col><CardComponent id="3" judul="Belajar Router" tanggal="05-05-2021"/></Col>
            </Row>
        </Container>
      </div>
    )
}

export default AboutComponent
