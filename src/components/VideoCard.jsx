import { Link } from "react-router-dom";
import styled from "styled-components";
import deleteIcon from "/deleteIcon.svg";
import editIcon from "/editIcon.svg";
import useVideo from "../hooks/useVideo";
import { videoContext } from "../context/VideoContext";
import { useContext } from "react";
const ButtonContainer = styled.div`
  width: 404px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 12px;
  top:60px;
  // Mobile Queries
  @media (max-width:480px) {
    width:350px;
  }
`;
const StyledButton = styled.button`
  background: #000;
  img {
    color: white;
  }
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  &:hover {
    cursor: pointer;
  }
`;
const StyledContainer = styled.div`
  width: 430px;
  border-radius: 15px 15px 0 0;
  color: #f5f5f5;
  overflow:auto;
  h2 {
    margin: 0;
    overflow: hidden;
  }
  p {
    max-height: 55px;
    overflow: hidden;
    margin: 0;
  }

    // Mobile Queries
    @media (max-width:480px) {
    width:372px;
  }
`;

const ImageContainer = styled.div`
  height: 260px;
  display: flex;
  img {
    border-radius: 15px 15px 0 0;
    height: 260px;
    width: 430px;
      // Mobile Queries
  @media (max-width:480px) {
    width:372px;
    
  }
  }
`;
const FooterContainer = styled.footer`
  padding: 16px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  border-radius: 0 0 15px 15px;
  border-bottom: 6px solid ${props=>props.$styledColor};
`;
export default function VideoCard(props) {
  const context = useContext(videoContext);
  const {eraseVideo} = context;
  const { video, color } = props;
  const {selectVideo} = useVideo();

  const handleDelete =(video)=>{
    eraseVideo(video)
    window.location.reload()
  }
  
  const { title, image, description, videoURL } = video;
  return (
    <StyledContainer>
      <ButtonContainer>
        <div>
          <StyledButton onClick={()=>selectVideo(video)}>
            <img src={editIcon} alt="Edit Icon" />
          </StyledButton>
        </div>
        <div>
          <StyledButton onClick={()=>handleDelete(video)} >
            <img src={deleteIcon} alt="Delete Icon" />
          </StyledButton>
        </div>
      </ButtonContainer>
      <ImageContainer>
        <Link to={videoURL} target="blank">
          <img src={image} alt={title} />
        </Link>
      </ImageContainer>
      <FooterContainer $styledColor = {color}>
        <h2>{title}</h2>
        <p>{description}</p>
      </FooterContainer>
    </StyledContainer>
  );
}
