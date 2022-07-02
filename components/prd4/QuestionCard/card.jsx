import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//import {FaRegCheckCircle } from "react-icons/fa";
import { Container} from "react-bootstrap";
import  Appy  from './Radio';
import "./App.css";
function Card1() {
  return (
    <div id="small22">
      <Card className="card22">
        <div className="right2">
        <Card.Body className="table12">
          <Card.Title className="title22">1. <small className="smally">WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
              nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
              Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
              diam.</small></Card.Title>
          <div className="table12">
            <Container className="list2">
            <Appy/>
            </Container>
          </div>
          <div className="btn1">
            <Button className="btn">Answer & Solution</Button>
            <Button className="btn2">Save for Later</Button>
          </div>
        </Card.Body>
        
        </div>
      </Card>
    </div>
  );
}

export default Card1;
