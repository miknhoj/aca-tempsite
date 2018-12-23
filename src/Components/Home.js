import React, { Component } from "react";
import styled from "styled-components";
import About from "./About";
import Faq from "./Faq";

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
  background-image: url("https://i.imgur.com/xisItmf.jpg");
  width: 80vw;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 555px) {
    display: none;
  }
`;
const StyledContactSection = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 80px;
  color: gold;
  font-family: "Nunito Sans", sans-serif;
`;
const StyledContactInfo = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Nunito Sans", sans-serif;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <StyledTopNav>
          <span>ACA</span>
          <StyledNavLinksContainer>
            <a href="#">ABOUT</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">CONTACT</a>
          </StyledNavLinksContainer>
        </StyledTopNav>
        <StyledHeadImage />
        <About />
        <Faq />
        <StyledContactSection id="contact">
          <h2>Contact</h2>
        </StyledContactSection>
        <StyledContactInfo>
          <p>
            <span>Email</span> Info@autoclaimsassistance.com
          </p>
          <p>
            <span>Phone</span> 470-213-4952
          </p>
          <p>
            <span>Address</span> 555 ACA Boulevard
          </p>
        </StyledContactInfo>
        <StyledFooter>&copy; Auto Claims Assistants 2018</StyledFooter>
      </div>
    );
  }
}

export default Home;
