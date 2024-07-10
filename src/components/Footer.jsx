import styled from "styled-components";
import logo from "/AluraFlix.svg";

const StyledFooter = styled.footer`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  border-top: 4px solid #2271d1;
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
`;
const StyledLogo = styled.img`
  width: 100%;
  height: 40px;
  max-width: 168px;
  margin: 0 auto;
  display: block;
`;

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <div>
          <StyledLogo src={logo} alt="AluraFlix Logo" />
        </div>
      </StyledFooter>
    </>
  );
}
