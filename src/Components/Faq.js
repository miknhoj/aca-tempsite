import React, { Component } from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 60px;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  h2 {
    color: #b9a648;
  }
`;
const StyledFaqSection = styled.div`
  margin: 0 auto;
  width: 60vw;
  margin-top: 60px;
  font-family: "Nunito Sans", sans-serif;
  span {
    font-weight: bold;
  }
`;

class Faq extends Component {
  render() {
    return (
      <div>
        <StyledSectionTitle id="faq">
          <h2>FAQ</h2>
        </StyledSectionTitle>
        <StyledFaqSection>
          <span>How much do your services cost? </span>
          <p>
            We manage the insurance claim and property damage repair process at no charge to you. If you choose to utilize our network of bodyshops. Should you choose an out of network shop it is a flat fee of $150.00. Remember the choice is always yours.
          </p>
          <span>What if the accident is my fault? Can you still help me? </span>
          <p>
            Yes! No matter who is liable, or whose fault it is, we are here to help remove the stress of the accident from your life.
          </p>
          <span>Why not file the insurance claim myself? </span>
          <p>
            You certainly can do that. But keep in mind you’ll spend a lot of time on the phone, a lot of time dealing with finding a body shop, a lot of time doing all this extra work on top of your normal day-to-day commitments. Ultimately the burden of proof would be on you. 
          </p>
          <span>Is there any part of the accident repair process you can’t handle for me?</span>
          <p>
            We can’t handle personal injury claims for you. We can’t handle your car note/ loan company. We can’t fund you or your claim. 
          </p>
          <span>
            Why doesn’t my attorney handle the claim and repair for me?
          </span>
          <p>
            Attorneys outsource this work to the professionals who do it best. You benefit in the end because having this outsourced cuts down on billable time from your attorney.
          </p>
        </StyledFaqSection>
      </div>
    );
  }
}

export default Faq;