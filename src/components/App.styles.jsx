import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body html #root {
    height: 100%;
  }
`;

export const AppContainer = styled.div`
  border: 3px solid cornflowerblue;
  border-radius: 10px;
  margin: 0 auto;
  height: 90vh;
  width: 600px;

  display: flex;
  flex-direction: column;
`;

export const MessageContainer = styled.div`
  padding: 1rem;
  flex-grow: 1;

  display: flex;
  flex-direction: column-reverse;
`;

export const MessageItem = styled.div`
  padding: 0.7rem;
  margin: 1rem 0 0 0;
  max-width: 40%;
  color: #000;
  border-radius: 10px;
  background-color: #286ce6;

  span:nth-child(1) {
    font-weight: bold;
    display: inline-block;
    margin: 0 0 3px 2px;
  }
`;

export const InputsContainer = styled.div`
  padding: 1rem;

  background-color: cornflowerblue;

  display: flex;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InputName = styled.input`
  padding: 0.5rem;
  margin: 0 10px 0 0;
  width: 100px;

  background-color: cornsilk;
  color: black;
`;

export const InputMessage = styled.input`
  padding: 0.5rem;
  margin: 0 10px 0 0;
  width: 380px;

  background-color: cornsilk;
  color: black;
`;

export const InputButton = styled.button`
  padding: 0.7rem;
  margin: 0;

  background-color: #286ce6;
`;
