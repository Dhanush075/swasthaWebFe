import React from "react";
import LightGallery from "lightgallery/react";
import bmrcl1 from "../../assets/images/event1/bmrcl1.jpg";
import bmrcl2 from "../../assets/images/event1/bmrcl2.jpg";
import bmrcl3 from "../../assets/images/event1/bmrcl3.jpg";
import bmrcl4 from "../../assets/images/event1/bmrcl4.jpg";
import bmrcl5 from "../../assets/images/event1/bmrcl5.jpg";
import bmrcl6 from "../../assets/images/event1/bmrcl6.jpg";
import raheja1 from "../../assets/images/event2/raheja1.jpg";
import raheja2 from "../../assets/images/event2/raheja2.jpg";
import raheja3 from "../../assets/images/event2/raheja3.jpg";
import raheja4 from "../../assets/images/event2/raheja4.jpg";
import raheja5 from "../../assets/images/event2/raheja5.jpg";
import raheja6 from "../../assets/images/event2/raheja6.jpg";
import raheja7 from "../../assets/images/event2/raheja7.jpg";
import raheja8 from "../../assets/images/event2/raheja8.jpg";
import raheja9 from "../../assets/images/event2/raheja9.jpg";
import raheja10 from "../../assets/images/event2/raheja10.jpg";
import raheja11 from "../../assets/images/event2/raheja11.jpg";
import raheja12 from "../../assets/images/event2/raheja12.jpg";
import raheja13 from "../../assets/images/event2/raheja13.jpg";
import raheja14 from "../../assets/images/event2/raheja14.jpg";
import raheja15 from "../../assets/images/event2/raheja15.jpg";
import raheja16 from "../../assets/images/event2/raheja16.jpg";
import raheja17 from "../../assets/images/event2/raheja17.jpg";
import raheja18 from "../../assets/images/event2/raheja18.jpg";
import kanakapura1 from "../../assets/images/event3/kanakapura1.jpg";
import kanakapura2 from "../../assets/images/event3/kanakapura2.jpg";
import kanakapura3 from "../../assets/images/event3/kanakapura3.jpg";
import kanakapura4 from "../../assets/images/event3/kanakapura4.jpg";
import kanakapura5 from "../../assets/images/event3/kanakapura5.jpg";
import kanakapura6 from "../../assets/images/event3/kanakapura6.jpg";
import kanakapura7 from "../../assets/images/event3/kanakapura7.jpg";
import kanakapura8 from "../../assets/images/event3/kanakapura8.jpg";
import kanakapura9 from "../../assets/images/event3/kanakapura9.jpg";
import "./events.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const thirdEvent = [
  { src: kanakapura1, alt: "1" },
  { src: kanakapura2, alt: "2" },
  { src: kanakapura3, alt: "3" },
  { src: kanakapura4, alt: "4" },
  { src: kanakapura5, alt: "5" },
  { src: kanakapura6, alt: "6" },
  { src: kanakapura7, alt: "7" },
  { src: kanakapura8, alt: "8" },
  { src: kanakapura9, alt: "9" },
];

const secondEvent = [
  { src: raheja1, alt: "1" },
  { src: raheja2, alt: "2" },
  { src: raheja3, alt: "3" },
  { src: raheja4, alt: "4" },
  { src: raheja5, alt: "5" },
  { src: raheja6, alt: "6" },
  { src: raheja7, alt: "7" },
  { src: raheja8, alt: "8" },
  { src: raheja9, alt: "9" },
  { src: raheja10, alt: "10" },
  { src: raheja11, alt: "11" },
  { src: raheja12, alt: "12" },
  { src: raheja13, alt: "13" },
  { src: raheja14, alt: "14" },
  { src: raheja15, alt: "15" },
  { src: raheja16, alt: "16" },
  { src: raheja17, alt: "17" },
  { src: raheja18, alt: "18" },
];

const firstEvent = [
  { src: bmrcl1, alt: "1" },
  { src: bmrcl2, alt: "2" },
  { src: bmrcl3, alt: "3" },
  { src: bmrcl4, alt: "4" },
  { src: bmrcl5, alt: "5" },
  { src: bmrcl6, alt: "6" },
];

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const events = [
    {
      title:
        "Health check-up camp at Shri Shanakara Mutt, Kote Kanakapura Town - 25th February 2024",
      images: thirdEvent,
    },
    {
      title: "Raheja Towers, MG Road - 16th February 2024",
      images: secondEvent,
    },
    {
      title:
        "Swastha Stree Launch at Bangalore Metro Rail(BMRCL) - 31st July 2023 to 4th August 2023",
      images: firstEvent,
    },
  ];

  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h1>{event.title}</h1>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[
              lgThumbnail,
              lgZoom,
              lgAutoplay,
              lgFullscreen,
              lgRotate,
              lgShare,
            ]}
          >
            {event.images.map((image, idx) => (
              <a href={image.src} key={idx}>
                <img alt={image.alt} src={image.src} />
              </a>
            ))}
          </LightGallery>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
