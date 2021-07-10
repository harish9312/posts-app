import React from "react";
import "./card.css";
import { CardFooter } from "./CardFooter";

export const Card = (props) => {
  const { event_name, event_date, thumbnail_image, ...rest } = props;
  return (
    <div className="card-container">
      <div className="content">
        <img className="event-image" src={thumbnail_image} alt="thumbnail" />
        {/* <h4 className="event-title">{event_name}</h4> */}
      </div>
      <CardFooter {...rest} />
    </div>
  );
};
