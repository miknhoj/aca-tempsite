import React, { Component } from "react";
import styled from "styled-components";
import About from "./About";
import Faq from "./Faq";
import Contact from "./Contact";

const StyledTopNav = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  height: 60px;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 55px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: bold;
    background: -webkit-linear-gradient(#fad961, #f7a51c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    span {
      font-size: 25px;
    }
  }
`;
const StyledNavLinksContainer = styled.div`
  a {
    margin-left: 85px;
    text-decoration: none;
    color: black;
    font-family: "Nunito Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
  }
  @media(max-width: 800px){
    a {
      margin-left: 15px;
    }    
  }
`;
const StyledFooter = styled.div`
  height: 30px;
  width: 100vw;
  margin-top: 80px;
  padding-top: 1%;
  text-align: center;
`;
const StyledHeadImage = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  background-image: url("https://i.imgur.com/PZCK8GB.jpg");
  width: 100vw;
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 555px) {
    display: none;
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <StyledTopNav>
          <span>Auto Claims Assistance</span>
          <StyledNavLinksContainer className="nav">
            <a href="#about">ABOUT</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">CONTACT</a>
          </StyledNavLinksContainer>
        </StyledTopNav>
        <StyledHeadImage />
        <About />
        <Faq />
        <Contact/>
        <StyledFooter>&copy; Auto Claims Assistance 2018</StyledFooter>
      </div>
    );
  }
}

export default Home;