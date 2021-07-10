import React from "react";
import "./card.css";
import { CardFooter } from "./CardFooter";
import Image, { Shimmer } from "react-shimmer";

export const Card = (props) => {
  const { event_name, event_date, thumbnail_image, onClick, ...rest } = props;
  return (
    <div className="card-container column" title={event_name}>
      <div onClick={onClick} className="content">
        <Image
          fallback={
            <Shimmer width={250} height={250} />
          }
          src={thumbnail_image}
          alt="thumbnail"
        />
      </div>
      <CardFooter {...rest} />
    </div>
  );
};
