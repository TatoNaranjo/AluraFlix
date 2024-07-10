import styled from "styled-components"

const StyledButton = styled.button`
    border-radius:15px;
    border: 2px solid #fff;
    width: 180px;
    height: 54px;
    background-color: #000;
    color:#fff;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;

    &:hover{
        color: var(--Blue, #2271D1);
        box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);
        border: 2px solid rgba(34, 113, 209, 0.70);
        cursor:pointer;
    }
`

export default function Button(props) {
    const {text, onClick} = props;
    return (
    <>
    <StyledButton onClick = {onClick}>
        {text}
    </StyledButton>
    </>
    )
}