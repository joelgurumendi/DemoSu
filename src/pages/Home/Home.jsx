import { useState, useRef } from "react";
import { Footer, Header } from "../../component";
import {
  ContainerHeader,
  ContainerVideos,
  Content,
  MainContainer,
} from "./Home.styles";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import "./Home.css";

const Home = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const handleVideoClick = (videoSrc) => {
    setActiveVideo(videoSrc);
  };

  const handleOverlayClick = () => {
    setActiveVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <MainContainer>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <Content>
        <div>
          <h3>Comencemos</h3>
          <ContainerVideos className="video-preview">
            <img
              src=""
              alt="Vista previa del video"
              onClick={() => handleVideoClick(video1)}
            />
          </ContainerVideos>
          {activeVideo === video1 && (
            <div className="video-overlay" onClick={handleOverlayClick}>
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
                autoPlay
              >
                <source src={video1} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
          )}
          <h3>Comencemos</h3>
          <ContainerVideos className="video-preview">
            <img
              src=""
              alt="Vista previa del video"
              onClick={() => handleVideoClick(video2)}
            />
          </ContainerVideos>
          {activeVideo === video2 && (
            <div className="video-overlay" onClick={handleOverlayClick}>
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
                autoPlay
              >
                <source src={video2} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
          )}
        </div>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Home;
