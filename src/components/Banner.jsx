import styled from "styled-components";
import useCategoryColor from "../hooks/useColor";
import { Link } from "react-router-dom";

const StyledContainerSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 832px;
  background-image: ${(props) => `url(${props.$videoImage})`};
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  color: #F5F5F5;
  z-index: 0;
`;
const BackgroundCover = styled.div`
  position: absolute;
  width: 100%;
  height: 832px;
  background-color: ${(props) => props.$categoryColor};
  opacity: 0.56;
  z-index: 0;
`;

const StyledSection = styled.div`
  position: absolute;
  width:95%;
  height: 832px;
  margin: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  img {
    border-radius: 14px;
    max-width: 648px;
    max-height: 334px;
    object-fit: contain;
    border: 4px solid ${props=>props.$categoryColor};
    box-shadow: 0px 0px 17px 8px ${props=>props.$categoryColor};

  }
`;
const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 50%;

  h1 {
    font-size: 48px;
    margin:0;
    margin-top:48px;
  }
  p {
    font-size: 18px;
    margin:0;
    margin-top: 12px;
  }
`;
const StyledCategoryHeaderTag = styled.div`
  display: flex;
  justify-content: center;
  font-size: 48px;
  padding: 8px;
  border-radius: 12px;
  width: 296px;
  background-color: ${(props) => props.$categoryColor};
  h4 {
    margin: 0;
  }
`;

export default function Banner(props) {
  const { video } = props;
  const { title, category, image, videoURL, description } = video;
  const { bringColor } = useCategoryColor();
  const color = bringColor(video);
  //console.log(color);
  return (
    <>
      <StyledContainerSection $videoImage={image}>
        <BackgroundCover $categoryColor={color} />
        <StyledSection $categoryColor={color}>
          <StyledTextContent>
            <StyledCategoryHeaderTag $categoryColor={color}>
              <h4>{category}</h4>
            </StyledCategoryHeaderTag>
            <h1>{title}</h1>
            <p>{description}</p>
          </StyledTextContent>
          <Link to={videoURL} target="blank">
            <img src={image} alt="play icon" />
          </Link>
        </StyledSection>
      </StyledContainerSection>
    </>
  );
}
