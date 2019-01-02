import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 40vw;
  font-size: 0.8rem;
  font-family: "Nunito Sans", sans-serif;
  line-height: 1.5;
  font-weight: 600;
  @media(max-width: 800px){
    width: 70vw;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: "Nunito Sans", sans-serif;
    border: none;
    border-bottom: 1px solid black;
    color: #393939;
    &:focus {
      outline: 0;
      border-color: red;
    }
  }
  button,
  input[type='submit'] {
    width: 300px;
    margin: 0 auto;
    background: #f7a51c;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  p {
    margin-top: 20px;
    font-size: 18px;
    text-align: center;
  }
`

export default class Form extends Component {
  render() {
    return (
      <div>
        <StyledForm action="https://formspree.io/kimjohan86@gmail.com" method="POST">
          <label htmlFor="name">
            NAME
            <input
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="email">
            EMAIL
            <input
              type="text"
              name="email"
              placeholder="youremail@email.com"
            />
          </label>
          <label htmlFor="phone">
            PHONE
            <input
              type="number"
              name="phone"
              placeholder="(_ _ _) _ _ _ - _ _ _ _"
            />
          </label>
          <label htmlFor="message">
            MESSAGE
            <textarea
              type="text"
              name="message"
              placeholder="Tell us more about you, the incident and your claim"
            />
          </label>
          <button> Submit </button>
          <p>Thank you!  We will get back to you within 24 hours.</p>
        </StyledForm>
      </div>
    )
  }
}
