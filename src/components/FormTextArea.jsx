import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 20px;
  margin: 16px 0;
  display: block;
`;
const StyledInput = styled.textarea`
  background-color: #191919;
  border: 2px solid #262626;
  color: #a5a5a5;
  border-radius: 10px;
  padding: 16px 12px;
  resize: none;
  height: 100px;

  // Mobile Queries
  @media (max-width:480px){
    height: 100px;
  }
`;
const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  .error {
    border: 2px solid #e53935;

    &::placeholder {
      color: #e53935;
    }
  }
`;

export default function FormTextArea(props) {
  const {
    forAttribute,
    labelText,
    inputText,
    inputType,
    required = false,
    name,
    value,
    updateValue,
  } = props;

  const handleChange = (event) => {
    updateValue((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  return (
    <>
      <StyledFormInput>
        <StyledLabel htmlFor={forAttribute}>{labelText}</StyledLabel>
        <StyledInput
          $resizable = "none"
          name={name}
          required={required}
          type={inputType}
          defaultValue={value}
          onChange={handleChange}
          htmlFor={forAttribute}
          placeholder={inputText}
        />
      </StyledFormInput>
    </>
  );
}
