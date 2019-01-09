import React, { Component } from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 60px;
  font-family: "Nunito Sans", sans-serif;
  h2 {
    color: #b9a648;
  }
  span {
    text-align: center;
  }
`;
const StyledMissionStatement = styled.div`
  margin: 0 auto;
  width: 60vw;
  margin-top: 60px;
  text-align: center;
  p {
    font-family: "Nunito Sans", sans-serif;
    font-size: 18px;
    font-weight: 200;
  }
`;
const StyledSectionFlexSpaceBetween = styled.div`
  margin: 0 auto;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  font-family: "Nunito Sans", sans-serif;
  span {
    font-size: 20px;
    font-weight: bold;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledSectionFlexColumn = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 60px;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  span {
    font-size: 20px;
    font-weight: bold;
    color: #b9a648;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
const StyledCard = styled.div`
  margin-top: 20px;
  width: 250px;
  min-height: 160px;
  border: 1px solid gray;
  text-align: left;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Nunito Sans", sans-serif;
  @media (max-width: 1100px) {
    margin-bottom: 15px;
  }
`;
const StyledStepsWithIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  margin-top: 80px;
  p {
    margin-top: 50px;
    text-align: left;
  }
`;
const StyledStepsIcons = styled.img`
  height: 150px;
`;
const StyledHalfSectionTitle = styled.div`
  margin: 0 auto;
  width: 32vw;
  margin-top: 80px;
  font-family: "Nunito Sans", sans-serif;
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #b9a648;
  }
  @media (max-width: 555px) {
    width: 70vw;
  }
`;
const StyledHalfSectionContent = styled.div`
  margin: 0 auto;
  width: 32vw;
  font-family: "Nunito Sans", sans-serif;
  @media (max-width: 555px) {
    width: 70vw;
  }
`;
const StyledSteps = styled.div`
  font-family: "Nunito Sans", sans-serif;
  width: 70vw;
  margin-bottom: 20px;
`;
const StyledPitch = styled.div`
  font-family: "Nunito Sans", sans-serif;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  p {
    width: 32vw;
  }
  @media(max-width: 800px){
    flex-direction: column;
    p {
      width: 70vw;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <div>
        <StyledMissionStatement>
          <p>
            "ACA offers auto claims assistance after you’ve had an accident,
            regardless of fault. We deal with your insurance company and vehicle 
            repair, giving you back your time."
          </p>
        </StyledMissionStatement>
        <StyledSectionTitle>
          <h2>Effortless Auto Damage Repairs After a Car Accident</h2>
        </StyledSectionTitle>
        <StyledSectionFlexSpaceBetween>
          <StyledCard>
            ACA comes to the rescue after you’ve been involved in a crash, and
            before you’ve spent valuable time on cleaning up the aftermath. We
            offer auto claims assistance that takes the hassle out of the
            insurance claim and vehicle repair process.
          </StyledCard>
          <StyledCard>
            ACA offers an alternative: let us take care of the details and
            aggravation of insurance claims and vehicle repair while you get on
            with your life.
          </StyledCard>
          <StyledCard>
            Did you know you have a choice after an accident? You don’t have to
            call your insurance company and go down the path of doing everything
            yourself, at the whim of the insurance company’s timeline and policy
            and procedures that may not be so clear.
          </StyledCard>
        </StyledSectionFlexSpaceBetween>
        <StyledSectionTitle>
          <span><h2 id="about">How's it work?</h2></span>
        </StyledSectionTitle>
        <StyledSectionFlexSpaceBetween>
          <StyledStepsWithIcons>
            <StyledStepsIcons src="https://i.imgur.com/7LbCb5l.png" />
            <p>You’re involved in a crash and your vehicle needs repairs.</p>
          </StyledStepsWithIcons>
          <StyledStepsWithIcons>
            <StyledStepsIcons src="https://i.imgur.com/pfUFqEN.png" />
            <p>
              Call ACA after your accident, before filing your claim with your
              insurance company.
            </p>
          </StyledStepsWithIcons>
          <StyledStepsWithIcons>
            <StyledStepsIcons src="https://i.imgur.com/qQ85op6.png" />
            <p>
              We take it from here. We file the claim, deal with both parties’
              insurance companies, even get your car to and from the body shop
              if you’d like. You get on with your life.
            </p>
          </StyledStepsWithIcons>
        </StyledSectionFlexSpaceBetween>
        <StyledSectionFlexSpaceBetween>
          <div>
            <StyledHalfSectionTitle>
              <h2>What’s the Cost of Using ACA?</h2>
            </StyledHalfSectionTitle>
            <StyledHalfSectionContent>
              <p>
                The best part – you DO NOT PAY for our claim services. Our
                services are paid by the third party vendors we use, not by you.
                We also offer an add-on concierge service for getting your car
                to and from the body shop.
              </p>
            </StyledHalfSectionContent>
          </div>
          <div>
            <StyledHalfSectionTitle>
              <h2>Why Not File the Insurance Claim Myself?</h2>
            </StyledHalfSectionTitle>
            <StyledHalfSectionContent>
              <p>
                Managing the insurance process yourself may not give you the
                best outcome. The insurance procedures on how to get property
                damage claims completed are not always easy to navigate or
                understand. The process does not favor you; it favors the
                insurance company.
              </p>
            </StyledHalfSectionContent>
          </div>
        </StyledSectionFlexSpaceBetween>
        <StyledSectionFlexColumn>
          <span>
            If you rely on your insurance company to guide you through the claim
            process, here’s what happens next:
          </span>

          <StyledSteps>
            <p>
              YOU stay on the phone with the insurance company while the claim
              is filled out
            </p>
            <p>
              YOU call around to body shops for estimates, hoping you choose a
              good one
            </p>
            <p>
              YOU file the claim with the other insurance company if you are not
              at fault in the accident.
            </p>
            <p>
              YOU make calls and stay on the phone while liability is decided
              between the insurance companies
            </p>
            <p>
              YOU are back on the phone with the insurance company getting
              approval for body shop repairs
            </p>
            <p>YOU arrange to get your damaged vehicle to the body shop</p>
            <p>
              YOU figure out how to get from the body shop to the rental car
              company
            </p>
            <p>
              YOU are at the mercy of whatever cost-saving deals the insurance
              company has worked out with the body shop
            </p>
            <p>
              YOU are on the phone with both insurance companies trying to get
              your claim moved through the process
            </p>
          </StyledSteps>
          <span>Does that sound like a good use of your valuable time?</span>
          <StyledPitch>
            <p>
              At ACA we know the guidelines, laws and what the process should
              be. We know when things are moving at market standard. It’s our
              job to move your claim through, to get your vehicle repaired, and
              keep you informed as we move through the process.
            </p>
            <p>
              We also have insider knowledge of the car repair process, and
              strong relationships with highly qualified body shops. Plus, we
              don’t require the body shops to conform to anything less than what
              they are experts in.
            </p>
          </StyledPitch>
        </StyledSectionFlexColumn>
      </div>
    );
  }
}

export default About;
