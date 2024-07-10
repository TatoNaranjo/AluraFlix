import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 20px;
  margin: 16px 0;
  display: block;
`;
const StyledInput = styled.input`
  background-color: #191919;
  border: 2px solid #262626;
  color: #a5a5a5;
  border-radius: 10px;
  padding: 16px 12px;

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

export default function FormTextField(props) {
  const {
    labelText,
    inputText,
    inputType,
    forAttribute,
    required = false,
    name,
    value,
    updateValue,
  } = props;

  const handleChange = (event) => {
    console.log(event.target.value)
    updateValue((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };
  return (
    <StyledFormInput>
      <StyledLabel htmlFor={forAttribute}>{labelText}</StyledLabel>
      <StyledInput
        name={name}
        defaultValue={value}
        required={required}
        type={inputType}
        htmlFor={forAttribute}
        placeholder={inputText}
        onChange={handleChange}
      />
    </StyledFormInput>
  );
}
