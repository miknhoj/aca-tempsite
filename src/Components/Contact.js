import React, { Component } from 'react';
import styled from 'styled-components'
import Form from './Form';

const StyledContactSection = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 80px;
  color: gold;
  font-family: "Nunito Sans", sans-serif;
  h2 {
    color: #b9a648;
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
    width: 20vw;
    @media(max-width:800px){
      width: 70vw;
    }
  }
`;
const StyledContactInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1%;
  @media(max-width: 800px){
    flex-direction: column;
  }
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
            <span>Phone</span> 770-502-6557
          </StyledContactInfo>
          <StyledContactInfo>
            <span>Submit your information</span> <Form/>
          </StyledContactInfo>
        </StyledContactInfoContainer>
      </div>
    );
  }
}

export default Contact;