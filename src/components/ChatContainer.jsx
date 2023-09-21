import { useState, useEffect } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
// import { useAuth } from "../context/AuthContext"; // Importe o useAuth do contexto


export default function ChatContainer() {
  // const { nickname } = useAuth();
  const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens
  // const [messageText, setMessageText] = useState(""); // Estado para a mensagem a ser enviada

  // const handleSendMessage = () => {
  //   if (messageText.trim() === "") {
  //     // Trate a mensagem vazia, exiba um erro ou evite o envio
  //     return;
  //   }

  //   const newMessage = {
  //     from: nickname,
  //     to: selectedContact, // Use o contato selecionado como destinatário
  //     text: messageText,
  //     type: "message",
  //     time: new Date().toLocaleTimeString(),
  //   };

  //   setMessages((prevMessages) => [...prevMessages, newMessage]);
  //   setMessageText(""); // Limpa o campo de entrada de mensagem após o envio
  // };

  // Simule o recebimento das mensagens do backend (você pode usar useEffect para isso)
  useEffect(() => {
    // Simule o recebimento das mensagens do backend (substitua isso pela lógica real de consumo do backend)
    const simulatedMessages = [
      {
        "from": "joao",
        "to": "Todos",
        "text": "entra na sala...",
        "type": "status",
        "time": "07:50:55"
      },
      {
        "to": "Todos",
        "text": "ola pessoas !",
        "type": "message",
        "from": "joao",
        "time": "07:51:29"
    },
    {
      "to": "joao",
      "text": "fala joao como esta cara? ",
      "type": "message",
      "from": "fulano",
      "time": "07:52:30"
  },
      // ... outras mensagens
    ];

    setMessages(simulatedMessages);
  }, []); // Executa apenas uma vez quando o componente é montado. apagar quando for integrar

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <Container>
      <div className="chat-header">
        <div className="room-details">
          <div className="room-avatar">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/beer-131982518583696551.png"
              alt=""
            />
          </div>
          <div className="room">
            <h3>Nome da sala</h3>
          </div>
        </div>
        <Logout />
      </div>

      <div className="chat-messages">
        {/* Renderize as mensagens aqui */}
        {messages.map((message, index) => (
  <div
    key={index}
    className={`message ${message.type === 'status' ? 'status' : ''}`}
  >
    <p>{`(${message.time}) ${message.from} para ${message.to}: `}</p>
    <div className="content">
      <p>{`${message.text}`}</p>
    </div>
  </div>
))}
      </div>

      <ChatInput addMessage={addMessage} /> {/* Passe a função addMessage como prop */}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #00000020;
    .room-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .room-avatar {
        img {
          height: 3rem;
        }
      }
      .room {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      color: #FFFF00;
      .content {
        display: flex;
        max-width: 70%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    /* Estilo para mensagens de status */
        .status {
        background-color: #ffffff15; /* Defina a cor de fundo desejada */
        /* Outros estilos, como cor de texto, podem ser ajustados aqui */
      }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
