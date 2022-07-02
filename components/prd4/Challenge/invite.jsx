import React from "react";
import { Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./invite.css";
import Form from "./input.jsx";

function Challenge() {

  return (
    <div id="small2">
      <Card className="card2">
   

        <Card.Body>
          <Card.Title className="title">Challenge your friends</Card.Title>
          <Card.Text>
          <div class="row">
  
  <div class="col-6"><div>
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div></div>
  <div class="col-6"> <div>
          <Card.Img
            variant="left"
            src=".images/Vector.jpg"
          />
        </div></div>
</div>        
          </Card.Text>
             <div class="row">

</div>
<div>
    <Form/>
</div>
         <h6 id="share">
or share using
        </h6> 

        <div>
            <span>
           <img src=".images/lin.jpg" alt=".."/>
            </span>
            <span>
            <img src=".images/fb.jpg" alt=".."/>
                </span>
                <span>
                <img src=".images/insta.jpg" alt=".."/>
                </span>
                <span>
                <img src=".images/wa.jpg" alt=".."/>
                </span>
                <span>
                <img src=".images/twitter.jpg" alt=".."/>
                </span>
        </div>
         
        </Card.Body>
      </Card>
    </div>
  );
}

export default Challenge;