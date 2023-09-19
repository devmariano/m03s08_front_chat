import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";


export default function ChatContainer() {

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
      <div className="message">
              <p>username:</p>
                <div className="content ">
                  <p># Entrou na sala #</p>
                </div>
              </div>

              <div className="message">
              <p>username:</p>
                <div className="content ">
                  <p>Olá como vocês estão?</p>
                </div>
              </div>

              <div className="message">
              <p>particiante 1 para username:</p>
                <div className="content ">
                  <p>Estamos bem! e você?</p>
                </div>
              </div>
      </div>
      <ChatInput  />
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
        max-width: 40%;
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
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
