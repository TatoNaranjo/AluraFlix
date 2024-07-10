import { useContext } from "react";
import { videoContext } from "../context/VideoContext";
import styled from "styled-components";
import Banner from "../components/Banner";
import Category from "../components/Category";
import EditVideoForm from "../components/EditVideoForm";

const StyledCategoryContainer = styled.section`
  margin: 24px;
`;

export default function Home() {
  const context = useContext(videoContext);
  const { videos, categories} = context;
  const newCategories = [];
  for (let category of categories) {
    newCategories.push(category.name);
  }
  const allVideos = videos;
  let byCategory = allVideos.slice(0);
  byCategory.sort(function(a,b){
    return a.category.localeCompare(b.category);
  })
  const bannerVideo = byCategory[0];

  return (
    <>
      <EditVideoForm/>
      {allVideos.length > 0 ? <Banner video={bannerVideo} /> : <div />}
      <StyledCategoryContainer>
      {newCategories.map((category, index) => (
          allVideos.length > 0 && (
            <Category key={index} category={category} videos={allVideos} />
          )
        ))}

      </StyledCategoryContainer>
    </>
  );
}
