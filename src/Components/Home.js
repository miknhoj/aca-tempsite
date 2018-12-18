import React, { Component } from "react";
import styled from "styled-components";

const StyledTopNav = styled.div`
  height: 60px;
  width: 100vw;
  background-color: navy;
  color: gold;
`;
const StyledFooter = styled.div`
  height: 30px;
  width: 100vw;
  margin-top: 80px;
  background-color: navy;
  color: gold;
  padding-top: 1%;
  text-align: center;
`
const StyledNavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 500px;
  span {
    font-size: 55px;
    font-family: "Play", sans-serif;
  }
  a {
    padding-top: 4%;
    text-decoration: none;
    color: gold;
    font-family: "Play", sans-serif;
  }
`;

const StyledHeadImage = styled.div`
  background-image: url("https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  width: 100vw;
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledMissinStatement = styled.div`
  margin: 0 auto;
  width: 60vw;
  margin-top: 80px;
  p {
    color: lightgray;
    font-style: italic;
    font-family: "Play", sans-serif;
    font-size: 25px;
    font-weight: 700;
  }
`;

const StyledSectionOne = styled.div`
  margin: 0 auto;
  width: 70vw;
  border-bottom: solid 3px navy;
  margin-top: 80px;
  font-family: "Play", sans-serif;
`;

const StyledSectionOneTitle = styled.div`
  background-color: navy;
  color: gold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 380px;
  padding: 1%;
  font-family: "Play", sans-serif;
`;
const StyledSectionOneContent = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 20px;
  font-family: "Play", sans-serif;
`;
const StyledSectionTwo = styled.div`
  margin: 0 auto;
  width: 70vw;
  border-bottom: solid 3px navy;
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
  font-family: "Play", sans-serif;
`;
const StyledSectionTwoTitle = styled.div`
  background-color: navy;
  color: gold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 115px;
  padding: 1%;
  font-family: "Play", sans-serif;
`;
const StyledSectionTwoContent = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-family: "Play", sans-serif;
  @media(max-width:1100px){
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSectionTwoCard = styled.div`
  height: 250px;
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 3%;
  font-family: "Play", sans-serif;
  overflow: scroll;
  @media(max-width:1100px){
    margin-bottom: 15px;
  }
`;
const StyledCardIcon = styled.img`
  height: 85px;
`;
const StyledSecThreeFourContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const StyledSectionThree = styled.div`
  margin: 0 auto;
  width: 32vw;
  border-bottom: solid 3px navy;
  margin-top: 80px;
  font-family: "Play", sans-serif;
`;
const StyledSectionThreeTitle = styled.div`
  background-color: navy;
  color: gold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 115px;
  padding: 1%;
  font-family: "Play", sans-serif;
`;
const StyledSectionThreeContent = styled.div`
  margin: 0 auto;
  width: 32vw;
  font-family: "Play", sans-serif;
`;
const StyledSectionFour = styled.div`
  margin: 0 auto;
  width: 32vw;
  border-bottom: solid 3px navy;
  margin-top: 80px;
  font-family: "Play", sans-serif;
`;
const StyledSectionFourTitle = styled.div`
  background-color: navy;
  color: gold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 205px;
  padding: 1%;
  font-family: "Play", sans-serif;
`;
const StyledSectionFive = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Play", sans-serif;
  span {
    color: lightgray;
    font-style: italic;
    font-family: "Play", sans-serif;
    font-size: 25px;
    font-weight: 700;
    width: 60vw;
    margin-bottom: 80px;
  }
  p {
    font-size: 20px;
  }
`
const StyledPitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
`
const StyledSteps = styled.div`
  font-family: "Play", sans-serif;
  width: 32vw;
`
const StyledPitch = styled.div`
  font-family: "Play", sans-serif;
  width: 32vw;
`
const StyledSectionSix = styled.div`
  margin: 0 auto;
  width: 70vw;
  border-bottom: solid 3px navy;
  margin-top: 80px;
  font-family: "Play", sans-serif;
`
const StyledSectionSixTitle = styled.div`
  background-color: navy;
  color: gold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 50px;
  padding: 1%;
  font-family: "Play", sans-serif;
`
const StyledSectionSixContent = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 20px;
  font-family: "Play", sans-serif;
  span {
    font-size: 20px;
    font-weight: bold;
  }
`
const StyledSectionSeven = styled.div`
  margin: 0 auto;
  width: 70vw;
  border-bottom: solid 3px navy;
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
  font-family: "Play", sans-serif;
`
const StyledSectionSevenTitle = styled.div`
  background-color: navy;
  color: gold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 65px;
  padding: 1%;
  font-family: "Play", sans-serif;
`
const StyledSectionSevenContent = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 20px;
  font-family: "Play", sans-serif;
  display: flex;
  justify-content: space-around;
  span {
    font-size: 20px;
    font-weight: bold;
  }
`

class Home extends Component {
  render() {
    return (
      <div>
        <StyledTopNav>
          <StyledNavLinksContainer>
            <span>ACA</span>
            <a href="#faq">FAQ</a>
            <a href="#contact">CONTACT</a>
          </StyledNavLinksContainer>
        </StyledTopNav>
        <StyledHeadImage />
        <StyledMissinStatement>
          <p>
            "ACA offers auto claims assistance after you’ve had an accident,
            regardless of fault. We deal with your insurance company and vehicle
            repair, giving you back your time."
          </p>
        </StyledMissinStatement>
        <StyledSectionOne>
          <StyledSectionOneTitle>
            Effortless Auto Damage Repairs After a Car Accident
          </StyledSectionOneTitle>
        </StyledSectionOne>
        <StyledSectionOneContent>
          <p>
            ACA comes to the rescue after you’ve been involved in a crash, and
            before you’ve spent valuable time on cleaning up the aftermath. We
            offer auto claims assistance that takes the hassle out of the
            insurance claim and vehicle repair process.
          </p>
          <p>
            Did you know you have a choice after an accident? You don’t have to
            call your insurance company and go down the path of doing everything
            yourself, at the whim of the insurance company’s timeline and policy
            and procedures that may not be so clear.
          </p>
          <p>
            ACA offers an alternative: let us take care of the details and
            aggravation of insurance claims and vehicle repair while you get on
            with your life.
          </p>
        </StyledSectionOneContent>
        <StyledSectionTwo>
          <StyledSectionTwoTitle>How's it work?</StyledSectionTwoTitle>
        </StyledSectionTwo>
        <StyledSectionTwoContent>
          <StyledSectionTwoCard>
            <StyledCardIcon src="https://i.imgur.com/OltMXHX.png" />
            <p>You’re involved in a crash and your vehicle needs repairs.</p>
          </StyledSectionTwoCard>
          <StyledSectionTwoCard>
            <StyledCardIcon src="https://i.imgur.com/OitWknR.png" />
            <p>
              Call ACA after your accident, before filing your claim with your
              insurance company.
            </p>
          </StyledSectionTwoCard>
          <StyledSectionTwoCard>
            <StyledCardIcon src="https://i.imgur.com/ez7R13u.png" />
            <p>
              We take it from here. We file the claim, deal with both parties’
              insurance companies, even get your car to and from the body shop
              if you’d like. You get on with your life.
            </p>
          </StyledSectionTwoCard>
        </StyledSectionTwoContent>
        <StyledSecThreeFourContainer>
          <div>
          <StyledSectionThree>
            <StyledSectionThreeTitle>
              What’s the Cost of Using ACA?
            </StyledSectionThreeTitle>
          </StyledSectionThree>
          <StyledSectionThreeContent>
            <p>The best part – you DO NOT PAY for our claim services. Our services are paid by the third party vendors we use, not by you. We also offer an add-on concierge service for getting your car to and from the body shop.</p>
          </StyledSectionThreeContent>
          </div>
          <div>
          <StyledSectionFour>
            <StyledSectionFourTitle>
              Why Not File the Insurance Claim Myself?
            </StyledSectionFourTitle>
          </StyledSectionFour>
          <StyledSectionThreeContent>
            <p>Managing the insurance process yourself may not give you the best outcome. The insurance procedures on how to get property damage claims completed are not always easy to navigate or understand. The process does not favor you; it favors the insurance company.  </p>
          </StyledSectionThreeContent>
          </div>
        </StyledSecThreeFourContainer>
        <StyledSectionFive>
          <span>If you rely on your insurance company to guide you through the claim process, here’s what happens next:</span>
          <StyledPitchContainer>
            <StyledSteps>
              <ul>
                <li>YOU stay on the phone with the insurance company while the claim is filled out</li>
                <li>YOU call around to body shops for estimates, hoping you choose a good one</li>
                <li>YOU file the claim with the other insurance company if you are not at fault in the accident.</li>
                <li>YOU make calls and stay on the phone while liability is decided between the insurance companies</li>
                <li>YOU are back on the phone with the insurance company getting approval for body shop repairs</li>
                <li>YOU arrange to get your damaged vehicle to the body shop</li>
                <li>YOU figure out how to get from the body shop to the rental car company</li>
                <li>YOU are at the mercy of whatever cost-saving deals the insurance company has worked out with the body shop</li>
                <li>YOU are on the phone with both insurance companies trying to get your claim moved through the process</li>
              </ul>
            </StyledSteps>
            <StyledPitch>
              <p>Does that sound like a good use of your valuable time?</p>
              <p>At ACA we know the guidelines, laws and what the process should be. We know when things are moving at market standard. It’s our job to move your claim through, to get your vehicle repaired, and keep you informed as we move through the process.</p>
              <p>We also have insider knowledge of the car repair process, and strong relationships with highly qualified body shops. Plus, we don’t require the body shops to conform to anything less than what they are experts in.</p>
            </StyledPitch>
          </StyledPitchContainer>
        </StyledSectionFive>
        <StyledSectionSix id="faq">
          <StyledSectionSixTitle>
            FAQ
          </StyledSectionSixTitle>
        </StyledSectionSix>
        <StyledSectionSixContent>
          <span>How much do your services cost? </span>
          <p>We manage the insurance claim and property damage repair process at no charge to you. If you choose to utilize our network of bodyshops. Should you choose an out of network shop it is a flat fee of $150.00. Remember the choice is always yours. </p>
          <span>What if the accident is my fault? Can you still help me? </span>
          <p>Yes! No matter who is liable, or whose fault it is, we are here to help remove the stress of the accident from your life.</p>
          <span>Why not file the insurance claim myself? </span>
          <p>You certainly can do that. But keep in mind that the insurance companies work in the best interest of the insurance companies, not you. You’ll spend a lot of time on the phone, a lot of time dealing with finding a body shop, a lot of time doing all this extra work on top of your normal day-to-day commitments. </p>
          <p>On top of that, information about your claim doesn’t get to your insurance company and consequently to you quickly. Further, if you’re a claimant with an insurance company (in other words, if you were not at fault in the accident) you will need to fight for your claim at times and you may not be familiar with industry standards and laws that dictate how the process should be going. The burden of proof is on you. </p>
          <span>Is there any part of the accident repair process you can’t handle for me? </span>
          <p>We can’t handle personal injury claims for you. We can handle everything with the vehicle, though.</p>
          <span>Why doesn’t my attorney handle the claim and repair for me?</span>
          <p>Attorneys outsource this work to the professionals who do it best. You benefit in the end because having this outsourced cuts down on billable time from your attorney.</p>
        </StyledSectionSixContent>
        <StyledSectionSeven id="contact">
          <StyledSectionSevenTitle>Contact</StyledSectionSevenTitle>
        </StyledSectionSeven>
        <StyledSectionSevenContent>
          <p><span>Email</span> email@aca.com</p>
          <p><span>Phone</span> 555-0123</p>
          <p><span>Address</span> 555 ACA Boulevard</p>
        </StyledSectionSevenContent>
        <StyledFooter>
          &copy; Auto Claims Assistants 2018
        </StyledFooter>
      </div>
    );
  }
}

export default Home;
