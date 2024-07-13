import { useContext, useEffect, useState } from "react";
import { videoContext } from "../../context/VideoContext";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import FormTextField from "../../components/FormTextField";
import OptionList from "../../components/OptionList";
import Button from "../../components/Button";
import FormTextArea from "../../components/FormTextArea";
import checkField from "../../hooks/fieldValidation";
import "react-toastify/dist/ReactToastify.css";

const StyledMain = styled.main`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 80px 200px;

  h1 {
    font-size: 60px;
    margin: 0;
    text-transform: uppercase;
  }
  h3 {
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
  }

      //Mobile Queries
      @media (max-width:480px) {
        h1{
          font-size:48px;
          text-align: center;
        }
        h3{
          font-size:16px;
        }
      }
`;

const StyledForm = styled.form`
  margin-top: 47px;
  border-top: 3px solid #262626;

  width: 100%;
  display: flex;
  flex-direction: column;
  legend {
    border-bottom: 3px solid #262626;
    padding: 24px 0;
    text-align: left;
    font-size: 36px;
  }

    //Mobile Queries
    @media (max-width:480px) {
    width: auto;
    div{
      width:320px;
    }
  }
`;

const StyledButtonDivider = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 30px;
`;
const StyledFieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  // Tablet Queries
  @media (max-width:1024px){
    flex-wrap: nowrap;
    flex-direction: column;
    div{
      width: 100%;
    }
  }

`;
export default function NewVideo() {
  const context = useContext(videoContext);
  const { addVideo,categories } = context;
  const [formData, setFormData] = useState({
    title: "",
    category: "Back-End",
    image: "",
    videoURL: "",
    description: "",
  });

  // function to handle the submit video event
  
  const redirectToHome = () =>{
    window.location.href = "/";
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, image, videoURL, description } = formData;
    if (!title || !image || !videoURL || !description) {
      toast.error("Por Favor, Rellena Todos Los Campos");
      return;
    }
    try{

      const response = await addVideo(formData);

      toast.success("Video guardado con éxito, serás redirigido a la página principal");
      
      setTimeout(redirectToHome,6000); 

    
    } catch (error){
      toast.error("Tu video no pudo ser publicado, inténtalo nuevamente");
      console.log("Se produjo un error",error)
    }
   
      
    
  };

  const formField = document.querySelectorAll("[required]");

  useEffect(() => {
    formField.forEach((field) => {
      field.addEventListener("blur", () => checkField(field));
    });
    //console.log(formData);
  }, [formData]);

  const cleanForm = (event) => {
    event.preventDefault();
    setFormData({
      title: "",
      category: "Back-End",
      image: "",
      videoURL: "",
      description: "",
    });

    formField.forEach((field) => {
      field.classList.remove("error");
    });
  };
  return (
    <>
      <StyledMain>
        <h1>Nuevo Video</h1>
        <h3>Complete el formulario para crear una nueva tarjeta de video</h3>

        <StyledForm
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <legend>Crear Tarjeta</legend>
          <StyledFieldContainer>
            <FormTextField
              labelText="Título"
              inputText="Ingrese el Título"
              inputType="text"
              forAttribute="title"
              name="title"
              value={formData.title}
              updateValue={setFormData}
              required
            />
            <OptionList
              name="category"
              categories={categories}
              required
              updateValue={setFormData}
            />
            <FormTextField
              labelText="Imagen de Portada"
              inputText="Ingrese el enlace de su imagen de portada"
              inputType="text"
              forAttribute="image"
              name="image"
              value={formData.image}
              updateValue={setFormData}
              required
            />
            <FormTextField
              labelText="Video"
              inputText="Ingresa el Enlace de tu video"
              inputType="text"
              forAttribute="videoURL"
              name="videoURL"
              value={formData.videoURL}
              updateValue={setFormData}
              required
            />
            <FormTextArea
              labelText="Descripción"
              inputText="Ingresa una descripción para tu video"
              inputType="text"
              forAttribute="description"
              name="description"
              vaue={formData.description}
              updateValue={setFormData}
              required
            />
          </StyledFieldContainer>
          <StyledButtonDivider>
            <Button text="Guardar" onClick={handleSubmit} />
            <Button text="Limpiar" onClick={cleanForm} />
          </StyledButtonDivider>
        </StyledForm>
        <div>
          <ToastContainer />
        </div>
      </StyledMain>
    </>
  );
}
