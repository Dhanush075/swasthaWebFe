import React from "react";
import LightGallery from "lightgallery/react";
import video1 from "../../assets/videos/MG_Road.mp4";
import video2 from "../../assets/videos/BBMP.mp4";
import video3 from "../../assets/videos/Hospital_Registration.mp4";
import video4 from "../../assets/videos/Lab_Reports.mp4";
import video5 from "../../assets/videos/UserFeedback1.mp4";
import video6 from "../../assets/videos/UserFeedback2.mp4";
import "./gallery.css";

const videos = [
  { src: video1, alt: "1" },
  { src: video2, alt: "2" },
  { src: video3, alt: "3" },
  { src: video4, alt: "4" },
  { src: video5, alt: "5" },
  { src: video6, alt: "6" },
];

function Videos() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="App">
      <h1 className="gallery-heading">Videos Gallery</h1>
      <LightGallery onInit={onInit} speed={500}>
        {videos.map((video, index) => (
          <a href={video.src} key={index}>
            <video controls width="100%">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default Videos;
