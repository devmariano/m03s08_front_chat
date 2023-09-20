import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";


export default function Chat() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifique se o nickname está no localStorage
    const nickname = localStorage.getItem("nickname");

    if (!nickname) {
      // Se o nickname não estiver definido, redirecione para a página de login
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Container>
        <div className="container">
          <Contacts />

            <ChatContainer />

        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(43,8,117,1) 35%, rgba(121,57,189,1) 100%);
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000030;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
