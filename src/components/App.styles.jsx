import styled from "styled-components";

export const AppContainer = styled.div`
  box-sizing: border-box;
  border: 3px solid chartreuse;
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

export const MessageItem = styled.p`
  background-color: darkcyan;
  max-width: 50%;
`;

export const InputsContainer = styled.div`
  padding: 1rem;

  background-color: cornflowerblue;

  display: flex;
  align-items: center;
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
  flex-grow: 1;

  background-color: cornsilk;
  color: black;
`;

export const InputButton = styled.button`
  padding: 0.7rem;
  margin: 0;

  background-color: crimson;
`;
