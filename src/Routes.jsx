import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NewVideo from "./pages/NewVideo/NewVideo";
import VideoContextProvider from "./context/VideoContext";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
          <VideoContextProvider>
        <Routes>
            <Route path="/" element={<BasePage />}>
              <Route index element={<Home />} />
              <Route path="/newvideo" element={<NewVideo />} />
              <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
          </VideoContextProvider>
      </BrowserRouter>
    </>
  );
}
