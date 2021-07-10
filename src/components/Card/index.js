import React from "react";
import "./card.css";
import { CardFooter } from "./CardFooter";

export const Card = (props) => {
  const { event_name, event_date, thumbnail_image, onClick, ...rest } = props;
  return (
    <div className="card-container column" title={event_name}>
      <div onClick={onClick} className="content">
        <img src={thumbnail_image} alt="thum" className="thumb-img" />
      </div>
      <div style={{ fontSize: "12px", textAlign: "center" }}>
        {new Date(Number(`${event_date}000`)).toDateString()}
      </div>
      <CardFooter {...rest} />
    </div>
  );
};
