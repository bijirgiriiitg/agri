import styled from "styled-components";
import React from "react";
import "./imagestyle.css";

const Reply = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img src="/images/icons/dp.png" className="custom-small-image" alt="DP" />
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <AName>{props.name}</AName>
          <ATime>2hrs ago</ATime>
        </div>
        <Answer>{props.reply}</Answer>
        <Line></Line>
      </div>
    </div>
  );
};

const AName = styled.div`
  width: 10vw;
  font-family: "Roboto";
  margin-top: 2vw;
  color: #878787;
  font-size: 15px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    width: 40vw;
    margin-top: 5vw;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const ATime = styled.div`
  width: 5vw;
  font-family: "Roboto";
  color: #878787;
  font-size: 12px;
  margin-top: 2vw;
  margin-left: 25vw;
  text-align: right;
  @media screen and (max-width: 600px) {
    margin-left: 15vw;
    width: 10vw;
    font-size: 10px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 5vw;
    font-size: 8px;
    margin-top: 4.5vw;
  }
`;

const Answer = styled.div`
  width: 40vw;
  font-family: "Roboto";
  color: #5f5f5f;
  font-size: 14px;
  margin-top: 0.5vw;
  @media screen and (max-width: 600px) {
    margin-top: 2vw;
    width: 50vw;
    font-size: 13px;
  }
  @media screen and (max-width: 400px) {
    width: 50vw;
    font-size: 11px;
  }
`;

const Line = styled.div`
  width: 40vw;
  margin-top: 1.5vw;
  border: 0.5px solid #cccccc;
  @media screen and (max-width: 600px) {
    width: 50vw;
  }
`;

export default Reply;
