import { IoMdSend } from "react-icons/io";
import Panic from "../assets/panic.jpg";
import styled from "styled-components";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

export default function ChatInput({ addMessage }) {
  const [messageText, setMessageText] = useState("");
  const { selectedContact } = useAuth();

  const nickname = localStorage.getItem("nickname");

  const handlePanicClick = () => {
    // Redirecione para o Google ou para outra funcionalidade quando o botão "Panic" for clicado
    window.location.href = "https://www.google.com";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (messageText.trim() !== "") {
      // Enviar a mensagem para o ChatContainer
      addMessage({
        from: nickname,
        to: selectedContact, // Modifique para o destinatário desejado
        text: messageText,
        type: "message",
        time: new Date().toLocaleTimeString(),
      });

      // Limpar o campo de entrada
      setMessageText("");
    }
  };

  return (
    <Container>
      <div className="button-container" onClick={handlePanicClick}>
        <img src={Panic} alt="panic" />
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite sua mensagem aqui"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

ChatInput.propTypes = {
  addMessage: PropTypes.func.isRequired, // addMessage deve ser uma função obrigatória
};

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  padding: 0 2rem;

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    img {
      cursor: pointer;
      height: 2rem;
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      cursor: pointer;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
