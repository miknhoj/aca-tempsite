import React, { Component } from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 30px;
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
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
  margin-top: 30px;
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
  margin-top: 30px;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  text-align: center;
  span {
    font-size: 20px;
    font-weight: bold;
    color: #b9a648;
    margin-top: 20px;
  }
`;
// const StyledCard = styled.div`
//   margin-top: 20px;
//   width: 250px;
//   min-height: 160px;
//   border: 1px solid gray;
//   text-align: left;
//   padding: 2%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   font-family: "Nunito Sans", sans-serif;
//   @media (max-width: 1100px) {
//     margin-bottom: 15px;
//   }
// `;
const StyledStepsWithIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  margin-top: 50px;
  p {
    margin-top: 50px;
    text-align: left;
  }
`;
const StyledStepsIcons = styled.img`
  height: 150px;
`;
// const StyledHalfSectionTitle = styled.div`
//   margin: 0 auto;
//   width: 32vw;
//   margin-top: 80px;
//   font-family: "Nunito Sans", sans-serif;
//   h2 {
//     font-size: 20px;
//     font-weight: bold;
//     color: #b9a648;
//   }
//   @media (max-width: 555px) {
//     width: 70vw;
//   }
// `;
// const StyledHalfSectionContent = styled.div`
//   margin: 0 auto;
//   width: 32vw;
//   font-family: "Nunito Sans", sans-serif;
//   @media (max-width: 555px) {
//     width: 70vw;
//   }
// `;
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
            ACA offers auto claims assistance after you’ve had an accident, regardless of fault, giving you back your time.
          </p>
        </StyledMissionStatement>
        <StyledSectionTitle>
          <h2>Effortless Auto Damage Repairs After a Car Accident</h2>
        </StyledSectionTitle>
        <StyledMissionStatement>
          <p>Property damage claims are not the easiest to navigate as it depends on your ability to mitigate/recover your auto repairs.That is why Auto Claims Assistance is here to assist after you’ve been involved in a crash, and before you’ve spent valuable time and effort. </p>
          <p>We offer help that takes the hassle out of the insurance claim and vehicle repair process.</p>
        </StyledMissionStatement>
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
              Call ACA and one of our representatives will assist you through the claims process. 
            </p>
          </StyledStepsWithIcons>
          <StyledStepsWithIcons>
            <StyledStepsIcons src="https://i.imgur.com/qQ85op6.png" />
            <p>
              Get your time back so you can focus on what's most important to you.
            </p>
          </StyledStepsWithIcons>
        </StyledSectionFlexSpaceBetween>
        
            <StyledSectionTitle>
              <h2>Common Questions about Property Damage</h2>
              <h4>What’s the Cost of Using ACA?</h4>
            </StyledSectionTitle>
            <StyledMissionStatement>
              <p>
                The best part – you DO NOT PAY for our claim services. Our
                services are paid by the third party vendors we use, not by you.
              </p>
              <p>We also offer an add-on concierge service for getting your car
                to and from the body shop.
              </p>
              </StyledMissionStatement>
            <StyledSectionTitle>
              <h2>Why Not File the Insurance Claim Myself?</h2>
            </StyledSectionTitle>
            <StyledMissionStatement>
              <p>
              The insurance procedures on how to get property damage claims completed are not always easy to navigate or understand. Not to mention, each insurance company’s process is a bit different and based on their policy holder’s guidelines. Which is why ACA is here to assist people like you through the process so you aren’t left wondering if it was a fair compromise. 
              </p>
        </StyledMissionStatement>
        <StyledSectionFlexColumn>
          <StyledSteps>
            <p>
              YOU stay on the phone with the insurance company while the claim is filed.
            </p>
            <p>(30 min legal process)</p>
            <p>
              YOU file the claim with the other insurance company, if you are not at fault in the accident.
            </p>
            <p>(30 min legal process) </p>
            <p>
              YOU make calls and stay on the phone while liability is decided between the insurance companies.
            </p>
            <p>(Can take up to 30 days) </p>
            <p>
              YOU are back on the phone with the insurance company getting approval repairs and rental.
            </p>
            <p>
              YOU arrange to get your damaged vehicle to the body shop.
            </p>
            <p>YOU figure out how to get from the body shop to the rental car company.</p>
            <p>
              YOU are on the phone with both insurance companies trying to get your claim moved through the process. 
            </p>
          </StyledSteps>
          <span>Does that sound like a good use of your valuable time?</span>
          <StyledMissionStatement>
            <p>
              At ACA we provide you with a comprehendible process that walks you through each phase of the claim and repair.  We also know the market standards which benefits the claim process for you and the liable party.
            </p>
            <p>
              We also have insider knowledge of the car repair process, which gets you connected with highly qualified body shops. Plus, we don’t require the body shops to conform to anything less than what they are experts in.
            </p>
          </StyledMissionStatement>
        </StyledSectionFlexColumn>
      </div>
    );
  }
}

export default About;
