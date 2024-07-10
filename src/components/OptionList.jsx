import styled from "styled-components";

const StyledLabel = styled.label`
    font-size: 20px;
    margin: 16px 0;
    display: block;
`

const StyledInput = styled.select`
    background-color: #191919;
    border: 2px solid #262626;
    color:#A5A5A5;
    border-radius: 10px;
    padding:16px 12px;
`

const StyledFormInput = styled.div`
display: flex;
flex-direction: column;
width: 40%;
`


export default function OptionList(props) {
    
    const{ updateValue,categories, name, defaultValue=""} = props;
    
    const handleChange = (event) => {
        updateValue((prevState) => ({
          ...prevState,
          [name]: event.target.value,
        }));
      };
    
  return (
    <>
      <StyledFormInput>
        <StyledLabel>Categoría</StyledLabel>
        <StyledInput name = {name} onChange = {handleChange} defaultValue={defaultValue} required>
          <option value="" disabled defaultValue={""} hidden>
            Seleccionar Categoría
          </option>
          {categories.map((option, index) => {
            return <option key={index}>{option.name}</option>
          })}
        </StyledInput>
      </StyledFormInput>
    </>
  );
}
