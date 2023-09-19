
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Contacts() {
  const image = ["https://api.multiavatar.com/4532.svg","https://api.multiavatar.com/12342.svg","https://api.multiavatar.com/12555.svg"]
 
  return (
    <>
     
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>Trindade</h3>
          </div>
          <div className="contacts">

                <div className="contact">
                  <div className="avatar">
                    <img
                      src={image[0]}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>participante 1</h3>
                  </div>
                </div>

                <div className="contact">
                  <div className="avatar">
                    <img
                      src={image[1]}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>participante 2</h3>
                  </div>
                </div>

          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={image[2]}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>seu username</h2>
            </div>
          </div>
        </Container>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 3rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
