import React, { Component } from 'react';
import styled from 'styled-components'


const StyledContactSection = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 80px;
  color: gold;
  font-family: "Nunito Sans", sans-serif;
  h2 {
    background: -webkit-linear-gradient(#fad961, #f7a51c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const StyledContactInfoContainer = styled.div`
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
const StyledContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1%;
`

class Contact extends Component {
  render() {
    return (
      <div>
        <StyledContactSection id="contact">
          <h2>Contact</h2>
        </StyledContactSection>
        <StyledContactInfoContainer>
          <StyledContactInfo>
            <span>Email</span> Info@autoclaimsassistance.com
          </StyledContactInfo>
          <StyledContactInfo>
            <span>Phone</span> 470-213-4952
          </StyledContactInfo>
        </StyledContactInfoContainer>
      </div>
    );
  }
}

export default Contact;