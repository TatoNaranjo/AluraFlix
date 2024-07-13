import { useContext } from "react";
import { videoContext } from "../context/VideoContext";
import styled from "styled-components";
import useCategoryColor from "../hooks/useColor";
import VideoCard from "./VideoCard";

const StyledCardContainer = styled.section`
display:flex;
gap:12px;

overflow-y: hidden;

// Tablet Queries
@media (max-width:1024px) {

  max-width: 800px;
  overflow:scroll;

}

// Mobile Queries
@media (max-width:480px) {
  flex-wrap:wrap;
}

`
const StyledCategoryTag = styled.div`
color:#F5F5F5;
  display: flex;
  justify-content: center;
  font-size: 32px;
  padding: 8px;
  margin:24px 0;
  border-radius: 12px;
  width: 296px;
  background-color: ${(props) => props.$categoryColor};
  h4 {
    margin: 0;
  }
`;


export default function Category(props) {
  const { category,videos } = props;
  const filteredVideos = videos.filter((video) => video.category === category);
  if(filteredVideos.length==0)return <div/>
  const { bringColor } = useCategoryColor();
  const color = bringColor(filteredVideos[0]);
  return (
    <>
      <StyledCategoryTag $categoryColor={color}>
        <h4>{category}</h4>
      </StyledCategoryTag>
      <StyledCardContainer className="video-list">
        {filteredVideos.map((video) => {
          return (
            <div key={video.id} className="video-item">
              <VideoCard video={video} color={color} />
            </div>
          );
        })}
      </StyledCardContainer>
    </>
  );
}
