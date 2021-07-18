import React from "react";
import {
  AppContainer,
  MessageContainer,
  MessageItem,
  InputsContainer,
  InputName,
  InputMessage,
  InputButton,
} from "./App.styles";

export default class App extends React.Component {
  state = {
    userName: "",
    userMessage: "",
    messages: [
      { name: "Lucas", message: "Estou criando meu app." },
      { name: "Thiago", message: "Está ficando show!" },
    ],
  };

  render() {
    const messageList = this.state.messages.map((message, index) => {
      return (
        <MessageItem key={index}>
          <span>{message.name}</span>
          <span>{message.message}</span>
        </MessageItem>
      );
    });

    return (
      <AppContainer>
        <MessageContainer>{messageList}</MessageContainer>
        <InputsContainer>
          <InputName />
          <InputMessage />
          <InputButton>
            <i class="far fa-paper-plane"></i>
          </InputButton>
        </InputsContainer>
      </AppContainer>
    );
  }
}
