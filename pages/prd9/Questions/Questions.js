import styled from "styled-components";
import React from "react";
import { useState } from "react";
import Reply from "./Reply";
import { BiUpvote } from "react-icons/bi";
import "./imagestyle.css";

const Questions = () => {
  const text =
    "Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam lavari si contingit ex per se lavantem.";

  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([text, text, text]);

  function handleChange(event) {
    const newReply = event.target.value;
    setReply(newReply);
  }

  function addReply() {
    setReplies((prevReplies) => {
      return [...prevReplies, reply];
    });
    setReply("");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <QuestionBox style={{ display: "flex", flexDirection: "row" }}>
        <img src="/images/icons/dp.png" className="custom-image" alt="DP" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <QName>Abhishek Bhatnagar</QName>
          <QTime>Posted 7hrs ago</QTime>
          <Question>
            Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem
            vadam lavari, ut mens mea in statu naturae conformior.” Et similiter
            circa alias res. Et sic, si contingit ex per se lavantem,Sic de isto
            et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam
            lavari, ut mens mea{" "}
          </Question>
          <ReplyDiv>
            <button style={{ backgroundColor: "#FFFFFF" }}>
              <BiUpvote className="icon"></BiUpvote>
            </button>
            <Likes>4.8k</Likes>
            <ReplyInput
              onChange={handleChange}
              type="text"
              value={reply}
              placeholder="Add a reply"
            />
            <ReplyButton onClick={addReply}>Reply</ReplyButton>
          </ReplyDiv>
        </div>
      </QuestionBox>

      <AnswerBox style={{ display: "flex", flexDirection: "column" }}>
        {replies.map((eachReply) => {
          return <Reply name="Ram Nagar" reply={eachReply}></Reply>;
        })}
        <More>Read More Comments</More>
      </AnswerBox>
    </div>
  );
};

export default Questions;

const QuestionBox = styled.div`
  width: 60vw;
  height: 20vw;
  background-color: #fdfdfd;
  border: 1px solid #dfdfdf;
  border-radius: 8px 8px 0px 0px;
  padding: 1vw 4vw;
  @media screen and (max-width: 1300px) {
    height: 25vw;
  }
  @media screen and (max-width: 1100px) {
    height: 32vw;
  }
  @media screen and (max-width: 900px) {
    height: 40vw;
  }
  @media screen and (max-width: 600px) {
    height: 72vw;
    width: 90vw;
  }
  @media screen and (max-width: 300px) {
    height: 70vw;
    width: 80vw;
  }
  @media screen and (max-width: 300px) {
    height: 110vw;
    width: 80vw;
  }
`;

const QName = styled.div`
  width: 15vw;
  font-family: "Roboto";
  margin-top: 2vw;
  color: #5f5f5f;
  font-size: 17px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    width: 40vw;
    margin-top: 5vw;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

const QTime = styled.div`
  width: 10vw;
  font-family: "Roboto";
  color: #878787;
  font-size: 12px;
  @media screen and (max-width: 600px) {
    width: 30vw;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const Question = styled.div`
  width: 40vw;
  font-family: "Roboto";
  color: #5f5f5f;
  font-size: 16px;
  margin-top: 1vw;
  @media screen and (max-width: 600px) {
    margin-top: 5vw;
    width: 50vw;
    font-size: 13px;
  }
  @media screen and (max-width: 400px) {
    width: 50vw;
    font-size: 11px;
  }
`;

const AnswerBox = styled.div`
  width: 60vw;
  min-height: 30vw;
  background-color: #fdfdfd;
  border: 1px solid #dfdfdf;
  border-radius: 8px 8px 0px 0px;
  padding: 1vw 4vw;
  @media screen and (max-width: 600px) {
    min-height: 80vw;
    width: 90vw;
  }
  @media screen and (max-width: 400px) {
    width: 90vw;
  }
  @media screen and (max-width: 300px) {
    width: 80vw;
  }
`;

const ReplyDiv = styled.div`
  width: 40vw;
  height: 2.4vw;
  margin-top: 2vw;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    margin-top: 5vw;
    height: 4vw;
    width: 50vw;
  }
  @media screen and (max-width: 400px) {
    height: 6vw;
  }
`;

const Likes = styled.div`
  width: 3vw;
  font-family: "Roboto";
  color: #878787;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
  @media screen and (max-width: 400px) {
    font-size: 6px;
  }
`;

const ReplyInput = styled.input`
  background-color: #e8e8e8;
  border-radius: 12px;
  border: none !important;
  font-size: 8px !important;
  padding-left: 1vw !important;
  ::placeholder {
    font-size: 10px !important;
  }

  @media screen and (max-width: 600px) {
    margin: 0 0 0 1vw !important;
  }
  @media screen and (max-width: 400px) {
    padding: 1px 2px !important;
    ::placeholder {
      font-size: 8px !important;
    }
  }
`;

const ReplyButton = styled.button`
  width: 7vw;
  background: #13ae7e;
  color: #ffffff;
  font-family: "Roboto";
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  margin: 0vw 0.66vw 0px 2vw;
  @media screen and (max-width: 600px) {
    width: 9vw;
    font-size: 10px;
  }
  @media screen and (max-width: 400px) {
    font-size: 6px;
    width: 12vw;
  }
`;

const More = styled.button`
  width: 10vw;
  font-size: 8px;
  text-decoration: underline;
  background-color: #ffffff;
  margin: 1.5vw 0 0 42vw;
  @media screen and (max-width: 600px) {
    margin: 1.5vw 0 0 62vw;
    font-size: 7px;
    width: 20vw;
  }
`;
