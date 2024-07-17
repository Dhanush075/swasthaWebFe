import React from "react";
import Carousel from "react-material-ui-carousel";
import slider1 from "../../assets/images/home_slider1.png";
import slider2 from "../../assets/images/home_slider2.png";
import slider3 from "../../assets/images/home_slider3.png";
import slider4 from "../../assets/images/home_slider4.png";

const WelcomeImage = () => {
  var items = [
    {
      image: slider1,
      text: "Swastha Medical",
      description: "An innovative self-serving all-in-one health check station",
    },
    {
      image: slider2,
      text: "SwaSeva Hospital",
      description: "Self-serving hospital station for patient registration",
    },
    {
      image: slider3,
      text: "Swastha Stree",
      description: "Automatic sanitary pad dispensing station",
    },
    {
      image: slider4,
      text: "Swastha Vahan",
      description: "State-of-the-art, advanced mobile health check station",
    },
  ];

  return (
    <div>
    <Carousel
      className="lg:h-full"
      indicators={false}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel></div>
  );
};

const Item = (props) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "auto",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translate(0, -50%)",
    color: "#7cab2c",
    textAlign: "left",
    fontSize: "3vw", 
    fontWeight: "bold",
  };

  const descriptionStyle = {
    position: "absolute",
    top: "60%",
    left: "5%",
    transform: "translate(0, -50%)",
    color: "black",
    textAlign: "left",
    fontSize: "2vw", 
  };

  return (
    <div style={containerStyle}>
      <img
        src={props.item.image}
        alt={`Slider ${props.index + 1}`}
        style={imageStyle}
      />
      <div style={overlayStyle}>{props.item.text}</div>
      <div style={descriptionStyle}>{props.item.description}</div>
    </div>
  );
};

export default WelcomeImage;