import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

let timelineElements = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We uphold sincerity in our commitment to provide excellent service",
  },
  {
    id: 2,
    title: "Innovative",
    description: "We deliver innovative products, simple to use to customers",
  },
  {
    id: 3,
    title: "Ideation",
    description:
      "We are consistently at the forefront of creating change by listening to our customers, being open to new ideas through the development of new services for our stakeholders.",
  },
  {
    id: 4,
    title: "Relationship",
    description:
      "We establish good relationships with people by keeping their interest in everything we do.",
  },
  {
    id: 5,
    title: "Committed",
    description:
      "We value the commitments we make and strive to meet our commitments",
  },
  {
    id: 6,
    title: "Quality and Reliability",
    description:
      "Health care is a critical service, requiring critical attention to quality and reliability. We strive to focus on the small details that goes into making a high quality product.",
  },
  {
    id: 7,
    title: "Dynamic",
    description:
      "We actively respond to challenges and changes in the business environment",
  },
];

function Timeline() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Our Values</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              iconStyle={{
                background: "#7cab2c",
                width: "30px",
                height: "30px",
                marginLeft: "-30px",
                transform: "translate(50%)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="description" style={{ fontSize: "15px" }}>
                {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
