import React from "react";
import { Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//import {FaRegCheckCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Appi from './corr';
function Card2() {
    return (
        <div id="small2">
            <Card className="card2">
                <div className="right">
                    <Card.Body className="table1">
                        <Card.Title className="title">1. <small className="smally">WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
                            nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
                            Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
                            diam.</small></Card.Title>

                        <div className="table1">

                            <Container className="list">
                                <Appi />
                
                            </Container>
                        </div>
                        <p className="correct"></p>
                        <div id="small3">
                            <Card className="card2">
                                <div className="right">
                                    <Card.Body className="table1">
                                        <Card.Title className="title2">Answer is Correct!</Card.Title>
                                        <p className="p1">Explanation</p>
                                        <p className="p2">Answer : Option B</p>
                                        <p className="p3">WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
                                            nec odio. Praesent libero Sed cursus ante dapibus diam.</p>
                                    </Card.Body>

                                </div>
                            </Card>
                        </div>

                    </Card.Body>

                </div>
            </Card>
        </div>
    );
}

export default Card2;
