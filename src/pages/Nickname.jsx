import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Nickname() {
  // Verifique se o usuário já tem um apelido definido
  const [nickname, setNickname] = useState(""); // Use o estado para armazenar o apelido
  const navigate = useNavigate(); // Obtém a função de navegação

  const handleNicknameSubmit = (e) => {
    e.preventDefault();
    // Valide o apelido, armazene-o no estado ou envie para o servidor, dependendo da sua lógica
    // Armazene o apelido no localStorage
    localStorage.setItem("nickname", nickname);
    
    // Se o apelido for válido, redirecione o usuário para a página do chat
    if (nickname.trim() !== "") {
      // Redirecionar para a página de chat
      console.log('entrando no chat');
      navigate("/"); // Use a função de navegação para redirecionar
    } else {
      // Exibir uma mensagem de erro ou validar o apelido
    }
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleNicknameSubmit}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>trindade</h1>
          </div>
          <input
            type="text"
            placeholder="Insira seu apelido"
            name="username"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            minLength="3"
          />
          <button type="submit">Entrar</button>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(43,8,117,1) 35%, rgba(121,57,189,1) 100%);
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
