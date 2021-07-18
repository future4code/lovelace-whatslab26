import React from "react";
import {
  AppContainer,
  MessageContainer,
  MessageItem,
  InputsContainer,
  FormContainer,
  InputName,
  InputMessage,
  InputButton,
} from "./App.styles";

export default class App extends React.Component {
  state = {
    userName: "",
    userMessage: "",
    messages: [{ name: "Lucas 🤘", message: "Projeto concluído, Thais!" }],
  };

  changeName = (event) => this.setState({ userName: event.target.value });

  changeMessage = (event) => this.setState({ userMessage: event.target.value });

  addMessage = (event) => {
    event.preventDefault();
    const newMessages = [
      {
        name: this.state.userName,
        message: this.state.userMessage,
      },
      ...this.state.messages,
    ];
    this.setState({
      messages: newMessages,
      userMessage: "",
    });
    console.log(newMessages);
  };

  removeMessage = (messageToRemove) => {
    const newMessages = [...this.state.messages].filter(
      (message) => message.message !== messageToRemove
    );
    this.setState({ messages: newMessages });
  };

  render() {
    const messageList = this.state.messages.map((message, index) => {
      return (
        <MessageItem
          onDoubleClick={() => this.removeMessage(message.message)}
          key={index}
        >
          <span>{message.name}</span>
          <br />
          <span>{message.message}</span>
        </MessageItem>
      );
    });

    return (
      <AppContainer>
        <MessageContainer>{messageList}</MessageContainer>
        <InputsContainer>
          <FormContainer onSubmit={this.addMessage}>
            <InputName
              placeholder={"Nome"}
              value={this.state.userName}
              onChange={this.changeName}
            />
            <InputMessage
              placeholder={"Mensagem"}
              value={this.state.userMessage}
              onChange={this.changeMessage}
            />
            <InputButton onClick={this.addMessage}>
              <i class="far fa-paper-plane"></i>
            </InputButton>
          </FormContainer>
        </InputsContainer>
      </AppContainer>
    );
  }
}
