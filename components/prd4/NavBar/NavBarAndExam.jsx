import styled from "styled-components";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Topics from "./TopicsPRD4";
// For the main content
import Card from '../QuestionCard/card';

const NavBars = () => {
  const classes = useStyles();
  // Active Button State
  const [active, setActive] = React.useState('Geometry');
  const SetView = (active) => {
    setActive(active);
  };

  // Active Sub Button State
  const [activeSub, setActiveSub] = React.useState('');
  const SetSubView = (activeSub) => {
    setActiveSub(activeSub);
  }

  // Change between sidenavbar topics
  const ActiveView = () => {
    switch (active) {
      case 'Algebra':
        return (<div >
          <SubTopic>Sub Topics</SubTopic>
          {Topics[1].subtopics.map((subtopic, index) => 
            <Button2 key={index} className={(activeSub===subtopic ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subtopic)}>{subtopic}</Button2>
          )}
        </div>
        ) ;
      case 'Trigonometry':
        return (<div key={2}>
          <SubTopic>Sub Topics</SubTopic>
          {Topics[2].subtopics.map((subtopic, index) => 
            <Button2 key={index} className={(activeSub===subtopic ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subtopic)}>{subtopic}</Button2>
          )}
        </div>
        ) ;
      case 'Arithmetics':
        return (<div key={3}>
          <SubTopic>Sub Topics</SubTopic>
          {Topics[3].subtopics.map((subtopic, index) => 
            <Button2 key={index} className={(activeSub===subtopic ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subtopic)}>{subtopic}</Button2>
          )}
        </div>
        ) ;
      case 'Statistics':
        return (<div key={4}>
          <SubTopic>Sub Topics</SubTopic>
          {Topics[4].subtopics.map((subtopic, index) => 
            <Button2 key={index} className={(activeSub===subtopic ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subtopic)}>{subtopic}</Button2>
          )}
        </div>
        ) ;
      case 'Verbal':
        return (<div key={5}>
          <SubTopic>Sub Topics</SubTopic>
          {Topics[5].subtopics.map((subtopic, index) => 
            <Button2 key={index} className={(activeSub===subtopic ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subtopic)}>{subtopic}</Button2>
          )}
        </div>
        ) ;
      case 'Grammar':
        return (<div key={6}>
          <SubTopic>Sub Topics</SubTopic>
          {Topics[6].subtopics.map((subtopic, index) => 
            <Button2 key={index} className={(activeSub===subtopic ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subtopic)}>{subtopic}</Button2>
          )}
        </div>
        ) ;
      case 'Reading':
        return (<div key={7}>
          <SubTopic>Sub Topics</SubTopic>
          {Topics[7].subtopics.map((subtopic, index) => 
            <Button2 key={index} className={(activeSub===subtopic ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subtopic)}>{subtopic}</Button2>
          )}
        </div>
        ) ;
      default:
        return (<div key={0}>
          <SubTopic>Sub Topics</SubTopic>
          {Topics[0].subtopics.map((subtopic, index) => 
            <Button2 key={index} className={(activeSub===subtopic ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subtopic)}>{subtopic}</Button2>
          )}
        </div>
        ) ;
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'row'}}>
    <SideNavBar>
        <Heading>All Subjects</Heading>
        <HeadText>MATHEMATICS</HeadText>
        <Line></Line>
        <Button1 className={(active==='Geometry' ? `${classes.activeButton1}` : '')} onClick={() => SetView('Geometry')}>Geometry</Button1>
        <Button1 className={(active==='Algebra' ? `${classes.activeButton1}` : '')} onClick={() => SetView('Algebra')}>Algebra</Button1>
        <Button1 className={(active==='Trigonometry' ? `${classes.activeButton1}` : '')} onClick={() => SetView('Trigonometry')}>Trigonometry</Button1>
        <Button1 className={(active==='Arithmetics' ? `${classes.activeButton1}` : '')} onClick={() => SetView('Arithmetics')}>Arithmetics</Button1>
        <Button1 className={(active==='Statistics' ? `${classes.activeButton1}` : '')} onClick={() => SetView('Statistics')}>Statistics</Button1>
        <HeadText>ENGLISH</HeadText>
        <Line></Line>
        <Button1 className={(active==='Verbal' ? `${classes.activeButton1}` : '')} onClick={() => SetView('Verbal')}>Verbal</Button1>
        <Button1 className={(active==='Grammar' ? `${classes.activeButton1}` : '')} onClick={() => SetView('Grammar')}>Grammar</Button1>
        <Button1 className={(active==='Reading' ? `${classes.activeButton1}` : '')} onClick={() => SetView('Reading')}>Reading</Button1>
    </SideNavBar>

    
    <div style={{display:'flex', flexDirection:'column'}}>
    <TopNavBar>
      
      {ActiveView()}
    </TopNavBar>
      
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </div>
    

    
      
    </div>

  );
};
const SideNavBar = styled.div`
  width: 15vw;
  height: auto;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #0B6E4F;
  border-radius: 12px;
  position: relative;
  margin: 4vw 2.66vw 0px 0px;
  
 
  @media screen and (max-width: 500px) {
    width: 30vw;
    }
  
  @media screen and (max-width: 300px) {
    width: 40vw;
    }
`;

const TopNavBar = styled.div`
  width: 55vw;
  height: 18vh;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));

  border-radius: 12px;
  position: relative;
  bottom:0px;
  margin: 4vw 0px 0px 0px;
  
  
 
  @media screen and (max-width: 500px) {
    width: 65vw;
    height: 10vh;
    }
`;

const Heading = styled.div`
  font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 20px;
color: #FFFFFF;
margin:4vw 0px 0px 0px;
padding: 0px 0px 0px 3.33vw;
@media screen and (max-width: 500px) {
  font-size: 17px;
  font-weight: 500;
  }
@media screen and (max-width: 300px) {
  font-size: 12px;
  font-weight: 400;
  margin:8vw 0px 0px 0px;
  }
`;

const HeadText = styled.div`
  margin:3.33vw 0px 0.66vw 0px;  
  padding: 0px 0px 0px 3.33vw;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 17px;
  color: #FFFFFF;
  @media screen and (max-height: 700px) {
    font-size: 13px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    font-weight: 500;
    margin:3.33vw 0px 1vw 0px;
    }
  @media screen and (max-width: 300px) {
  font-size: 10px;
  font-weight: 300;
  margin:5vw 0px 0.66vw 0px; 
  }
`;

const SubTopic = styled.text`
  color: #0B6E4F;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  padding: 0px 0px 0px 1.33vw;
  @media screen and (max-width: 300px) {
    font-size: 13px;
  }
`;


const Line = styled.div`
  position: absolute;
  width: 10vw;
  height: 0px;
  left:3.33vw;
  border: 0.5px solid #D8D8D8;
  @media screen and (max-width: 500px) {
    width: 25vw;
    }
  @media screen and (max-width: 300px) {
    width: 30vw;
  }
`;

const Button1 = styled.button`
  width: 11.5vw;
  background: #0B6E4F;
  color: #DADADA;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  margin: 0.66vw 0.66vw 0px 2vw;
  padding: 0.33vw 0.66vw 0.33vw 2vw;
  @media screen and (max-width: 500px) {
    width: 25vw;
    margin: 1vw 0.66vw 0px 2vw;
    font-size: 13px;
    }
    @media screen and (max-width: 300px) {
      width: 30vw;
  font-size: 10px;
  font-weight: 400;
  margin: 1.5vw 0.66vw 0px 2vw;
  }
`; 

const Button2 = styled.button`
  width: 10vw;
  border: 2px solid #C4C4C4;
  color: #0B6E4F;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  margin: 0.66vw 0.66vw 0px 1.33vw;
  padding: 0.33vw 0.66vw 0.33vw 2vw;
  @media screen and (max-width: 500px) {
    width: 20vw;
    margin: 1vw 0.66vw 0px 2vw;
    font-size: 13px;
    }
  @media screen and (max-width: 300px) {
    width: 22vw;
    margin: 1vw 0.66vw 0px 2vw;
    font-size: 10px;
  }
`; 

const useStyles = makeStyles(() => ({
  activeButton1: {
    background: '#FFFFFF !important',
    color: '#0B6E4F !important',
    fontWeight: '700 !important',
  },
  activeButton2: {
    background: '#13AE7E !important',
    color: '#FFFFFF !important',
    fontWeight: '700 !important',
  },
}));


 



export default NavBars;
