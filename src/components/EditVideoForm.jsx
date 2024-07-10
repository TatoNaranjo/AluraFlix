import { useContext, useEffect, useState } from "react";
import { videoContext } from "../context/VideoContext";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import close from "/closeWhite.svg";
import FormTextField from "./FormTextField";
import OptionList from "./OptionList";
import FormTextArea from "./FormTextArea";
import Button from "./Button";
import useVideo from "../hooks/useVideo";
import checkField from "../hooks/fieldValidation";

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  color: #fff;
`;
const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
`;

const StyledDialog = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 6;
  img {
    width: 32px;
    height: 32px;
  }
`;

const StyledForm = styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 30;
  header {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  legend {
    color: #2271d1;
    text-align: left;
    font-size: 60px;
    font-weight: 900;
  }
`;

const StyledButton = styled.button`
    background: rgba(0,0,0,0);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledButtonDivider = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 30px;
`;

export default function EditVideoForm() {
  const context = useContext(videoContext);
  const { categories, selectedVideo,setSelectedVideo, modifyVideo} = context;
  const {closeForm} = useVideo();
  
  const formField = document.querySelectorAll("[required]");

  useEffect(() => {
    formField.forEach((field) => {
      field.addEventListener("blur", () => checkField(field));
    });
    //console.log(formData);
  }, [selectedVideo]);

  const cleanForm = (event) => {
    event.preventDefault();
    setSelectedVideo({
      ...selectedVideo,
      title:"",
      category:"",
      image:"",
      videoURL:"",
      description:"",
    });

    formField.forEach((field) => {
      field.classList.remove("error");
      field.value = "";
    });
  };


  const redirectToHome = () =>{
    window.location.href = "/";
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {title, image, videoURL, description } = selectedVideo;
    if (!title || !image || !videoURL || !description) {
      toast.error("Por Favor, Rellena Todos Los Campos");
      return;
    }

    try{

      const response = await modifyVideo(selectedVideo);
      redirectToHome();
    
    } catch (error){
      toast.error("Tu video no pudo ser editado, inténtalo nuevamente");
      console.log("Se produjo un error",error)
    }

  };


  return (
    <>
      {selectedVideo && (
        <StyledContainer>
          <StyledBackground />

          <StyledDialog>
            <StyledForm onSubmit={(event)=>event.preventDefault()}>
              <header>
                <legend>Editar Video</legend>
                <StyledButton onClick={()=>closeForm()}>
                  <img src={close} alt="Close Button" />
                </StyledButton>
              </header>
              <FormTextField
                labelText="Título"
                inputText={selectedVideo.title}
                value={selectedVideo.title}
                inputType="text"
                forAttribute="title"
                name="title"
                updateValue={setSelectedVideo}
                required
              />
              <OptionList
                name="category"
                categories={categories}
                required
                updateValue={setSelectedVideo}
                defaultValue={selectedVideo.category}
              />

              <FormTextField
                labelText="Imagen de Portada"
                value={selectedVideo.image}
                inputText={selectedVideo.image}
                inputType="text"
                forAttribute="image"
                name="image"
                updateValue={setSelectedVideo}
                required
              />
              <FormTextField
                labelText="Video"
                value={selectedVideo.videoURL}
                inputText={selectedVideo.videoURL}
                inputType="text"
                forAttribute="videoURL"
                name="videoURL"
                updateValue={setSelectedVideo}
                required
              />
              <FormTextArea
                labelText="Descripción"
                value={selectedVideo.description}
                inputText={selectedVideo.description}
                inputType="text"
                forAttribute="description"
                name="description"
                updateValue={setSelectedVideo}
                required
              />

              <StyledButtonDivider>
                <Button text="Guardar" onClick={handleSubmit} />
                <Button text="Limpiar" onClick={cleanForm} />
              </StyledButtonDivider>
            </StyledForm>
          </StyledDialog>
          <div>
          <ToastContainer />
        </div>
        </StyledContainer>
      )}
    </>
  );
}
