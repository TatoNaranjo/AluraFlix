import styled from "styled-components";
import logo from "/AluraFlix.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  padding: 32px 20px;
  border-bottom: 4px solid #2271d1;
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);

  // Mobile Queries
  @media (max-width:480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledLogo = styled.img`
  width: 100%;
  height: 40px;
  max-width: 168px;
  margin: 0 auto;
  display: block;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 25px;

  // Mobile Queries
  @media (max-width:480px) {
    gap: 10px;
  }
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <div>
          <StyledLogo src={logo} alt="AluraFlix Logo" />
        </div>

        <StyledNav>
          <Link to="/">
            <Button text="Home" />
          </Link>
          <Link to="/newvideo">
            <Button text="Nuevo Video" />
          </Link>
        </StyledNav>
      </StyledHeader>
    </>
  );
}
