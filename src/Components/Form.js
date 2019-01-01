import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  width: 68vw;
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  font-family: "Nunito Sans", sans-serif;
  line-height: 1.5;
  font-weight: 600;
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
    background: -webkit-linear-gradient(#fad961, #f7a51c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`

export default class Form extends Component {
  render() {
    return (
      <div>
        <StyledForm action="https://formspree.io/kimjohan86@gmail.com" method="POST">
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              placeholder="youremail@email.com"
            />
          </label>
          <label htmlFor="phone">
            Phone Number
            <input
              type="number"
              name="phone"
              placeholder="(_ _ _) _ _ _ - _ _ _ _"
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              type="text"
              name="message"
              placeholder="Tell us more about you, the incident and your claim"
            />
          </label>
          <button> Submit </button>
        </StyledForm>
      </div>
    )
  }
}
