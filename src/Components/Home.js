import React, { Component } from "react";
import styled from "styled-components";

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
    font-family: 'Nunito Sans', sans-serif;
    background: -webkit-linear-gradient(#FAD961, #F7A51C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const StyledFooter = styled.div`
  height: 30px;
  width: 100vw;
  margin-top: 80px;
  background-color: navy;
  color: gold;
  padding-top: 1%;
  text-align: center;
`;
const StyledNavLinksContainer = styled.div`
  a {
    margin-left: 85px;
    text-decoration: none;
    color: black;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
  }
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
const StyledMissionStatement = styled.div`
  margin: 0 auto;
  width: 60vw;
  margin-top: 60px;
  text-align: center;
  p {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    font-weight: 200;
  }
`;
const StyledSection = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 60px;
  font-family: 'Nunito Sans', sans-serif;
  h2 {
    background: -webkit-linear-gradient(#FAD961, #F7A51C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const StyledSectionFlexEnd = styled.div`
  margin: 0 auto;
  width: 70vw;
  text-align: center;
  margin-top: 60px;
  background: -webkit-linear-gradient(#FAD961, #F7A51C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  font-family: 'Nunito Sans', sans-serif;
`;
const StyledSectionFlexSpaceBetween = styled.div`
  margin: 0 auto;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  font-family: 'Nunito Sans', sans-serif;
  span {
    font-size: 20px;
    font-weight: bold;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
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
  font-family: 'Nunito Sans', sans-serif;
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
`
const StyledCardIcon = styled.img`
  height: 75px;
`;
const StyledHalfSection = styled.div`
  margin: 0 auto;
  width: 32vw;
  margin-top: 80px;
  font-family: 'Nunito Sans', sans-serif;
  color: gold;
  h2 {
    font-size: 20px;
    font-weight: bold;
    /* color: gold; */
    background: -webkit-linear-gradient(#FAD961, #F7A51C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media(max-width: 555px){
    width: 70vw;
  }
`;
const StyledHalfSectionContent = styled.div`
  margin: 0 auto;
  width: 32vw;
  font-family: 'Nunito Sans', sans-serif;
  @media (max-width: 555px) {
    width: 70vw;
  }
`;
const StyledSectionFlexColumn = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 60px;
  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  span {
    font-size: 20px;
    font-weight: bold;
    background: -webkit-linear-gradient(#FAD961, #F7A51C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
const StyledSteps = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  width: 70vw;
  margin-bottom: 20px;
`;
const StyledPitch = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  p {
    width: 32vw;
  }
`;
const StyledContactSection = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 80px;
  color: gold;
  font-family: 'Nunito Sans', sans-serif;
`
const StyledContactInfo = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Nunito Sans', sans-serif;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`
const StyledFaqSection = styled.div`
  margin: 0 auto;
  width: 60vw;
  margin-top: 60px;
  font-family: 'Nunito Sans', sans-serif;
  span {
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
        <StyledMissionStatement>
          <p>
            "ACA offers auto claims assistance after you’ve had an accident,
            regardless of fault.  We deal 
          </p>
          <p> 
            with your insurance company and vehicle
            repair, giving you back your time."
          </p>
        </StyledMissionStatement>
        <StyledSection>
          <h2>
            Effortless Auto Damage Repairs After a Car Accident
          </h2>
        </StyledSection>
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
        <StyledSectionFlexEnd>
          <h2>How's it work?</h2>
        </StyledSectionFlexEnd>
        <StyledSectionFlexSpaceBetween>
          <StyledStepsWithIcons>
            <StyledCardIcon src="https://i.imgur.com/AjDxCKr.png?1" />
            <p>You’re involved in a crash and your vehicle needs repairs.</p>
          </StyledStepsWithIcons>
          <StyledStepsWithIcons>
            <StyledCardIcon src="https://mail.google.com/mail/u/0?ui=2&ik=d95b23bb62&attid=0.1.7&permmsgid=msg-f:1620494967424139638&th=167d27964d9fc176&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8CkCaR6LxwoY_9kRt7VvDyrCEbgI2LXFHUgYiFyGHCweXm7CBosgThlyq6Nwk6P5ZMdXF8-egQy5ObLw171kWj2AmxuEkJQh11vGHBhYi4OxZzxmEgNkexmMA&disp=emb" />
            <p>
              Call ACA after your accident, before filing your claim with your
              insurance company.
            </p>
          </StyledStepsWithIcons>
          <StyledStepsWithIcons>
            <StyledCardIcon src="https://mail.google.com/mail/u/0?ui=2&ik=d95b23bb62&attid=0.1.6&permmsgid=msg-f:1620494967424139638&th=167d27964d9fc176&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-xGRUQwDNsbILDHhAgheSbJm9x1zVc_abu29KD19Exj1xU0hNMFU94Mp0NZk53wa6FUmwhEIV9NR40qM4BIskgD2Ev4IYS1TKUWu6MvRvUzhRJHgeYFsmQJBg&disp=emb" />
            <p>
              We take it from here. We file the claim, deal with both parties’
              insurance companies, even get your car to and from the body shop
              if you’d like. You get on with your life.
            </p>
          </StyledStepsWithIcons>
        </StyledSectionFlexSpaceBetween>
        <StyledSectionFlexSpaceBetween>
          <div>
            <StyledHalfSection>
              <h2>
                What’s the Cost of Using ACA?
              </h2>
            </StyledHalfSection>
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
            <StyledHalfSection>
              <h2>
                Why Not File the Insurance Claim Myself?
              </h2>
            </StyledHalfSection>
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
                  YOU stay on the phone with the insurance company while the
                  claim is filled out
                </p>
                <p>
                  YOU call around to body shops for estimates, hoping you choose
                  a good one
                </p>
                <p>
                  YOU file the claim with the other insurance company if you are
                  not at fault in the accident.
                </p>
                <p>
                  YOU make calls and stay on the phone while liability is
                  decided between the insurance companies
                </p>
                <p>
                  YOU are back on the phone with the insurance company getting
                  approval for body shop repairs
                </p>
                <p>
                  YOU arrange to get your damaged vehicle to the body shop
                </p>
                <p>
                  YOU figure out how to get from the body shop to the rental car
                  company
                </p>
                <p>
                  YOU are at the mercy of whatever cost-saving deals the
                  insurance company has worked out with the body shop
                </p>
                <p>
                  YOU are on the phone with both insurance companies trying to
                  get your claim moved through the process
                </p>
            </StyledSteps>
            <span>Does that sound like a good use of your valuable time?</span>
            <StyledPitch>
              <p>
                At ACA we know the guidelines, laws and what the process should
                be. We know when things are moving at market standard. It’s our
                job to move your claim through, to get your vehicle repaired,
                and keep you informed as we move through the process.
              </p>
              <p>
                We also have insider knowledge of the car repair process, and
                strong relationships with highly qualified body shops. Plus, we
                don’t require the body shops to conform to anything less than
                what they are experts in.
              </p>
            </StyledPitch>
          
        </StyledSectionFlexColumn>
        <StyledSection id="faq">
          <h2>FAQ</h2>
        </StyledSection>
        <StyledFaqSection>
          <span>How much do your services cost? </span>
          <p>
            We manage the insurance claim and property damage repair process at
            no charge to you. If you choose to utilize our network of bodyshops.
            Should you choose an out of network shop it is a flat fee of
            $150.00. Remember the choice is always yours.
          </p>
          <span>What if the accident is my fault? Can you still help me? </span>
          <p>
            Yes! No matter who is liable, or whose fault it is, we are here to
            help remove the stress of the accident from your life.
          </p>
          <span>Why not file the insurance claim myself? </span>
          <p>
            You certainly can do that. But keep in mind that the insurance
            companies work in the best interest of the insurance companies, not
            you. You’ll spend a lot of time on the phone, a lot of time dealing
            with finding a body shop, a lot of time doing all this extra work on
            top of your normal day-to-day commitments.
          </p>
          <p>
            On top of that, information about your claim doesn’t get to your
            insurance company and consequently to you quickly. Further, if
            you’re a claimant with an insurance company (in other words, if you
            were not at fault in the accident) you will need to fight for your
            claim at times and you may not be familiar with industry standards
            and laws that dictate how the process should be going. The burden of
            proof is on you.
          </p>
          <span>
            Is there any part of the accident repair process you can’t handle
            for me?
          </span>
          <p>
            We can’t handle personal injury claims for you. We can handle
            everything with the vehicle, though.
          </p>
          <span>
            Why doesn’t my attorney handle the claim and repair for me?
          </span>
          <p>
            Attorneys outsource this work to the professionals who do it best.
            You benefit in the end because having this outsourced cuts down on
            billable time from your attorney.
          </p>
        </StyledFaqSection>
        <StyledContactSection id="contact">
          <h2>Contact</h2>
        </StyledContactSection>
        <StyledContactInfo>
          <p>
            <span>Email</span> email@aca.com
          </p>
          <p>
            <span>Phone</span> 555-0123
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
