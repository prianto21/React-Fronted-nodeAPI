import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
const CardComponent = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{props.judul}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.tanggal}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>
            <Link
              to={{
                pathname: `/detail/${props.id}`,
                state: {
                  judul: props.judul,
                  tanggal: props.tanggal,
                },
              }}
            >
              Check for Detail
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
