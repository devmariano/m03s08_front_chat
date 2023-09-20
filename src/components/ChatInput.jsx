import { IoMdSend } from "react-icons/io";
import Panic from "../assets/panic.jpg";
import styled from "styled-components";
import { useState } from "react";


export default function ChatInput() {
  const handlePanicClick = () => {
    // Redirecione para o Google ou para outra funcionalidade quando o botão "Panic" for clicado
    window.location.href = "https://www.google.com";
  };

  const [message, setMessage] = useState("")
  
  return (
    <Container>
      <div className="button-container" onClick={handlePanicClick}>
      <img src={Panic} alt="panic" />

      </div>
      <form className="input-container" >
        <input
          type="text"
          placeholder="digite sua mensagem aqui"
          value={message}
          onChange={e => setMessage(e.value)}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

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
