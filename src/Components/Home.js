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
  background-image: url("https://mail.google.com/mail/u/0?ui=2&ik=d95b23bb62&attid=0.1.1&permmsgid=msg-f:1620494088208967957&th=167d26c99850e915&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_W3WSklmwoyGQEqW0k9mwE0akHGYiL2i6g6sP2oMtOvd5HWQacFdVy-Pmtc5w_zYkL1btkuYSCooKlT_oOP6xQY014GhThm7MhsSffbAPszcpVcgR3Yown2_o&disp=emb");
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
