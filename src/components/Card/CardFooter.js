import React from "react";

import { Likes } from "./Likes";
import { Shares } from "./Share";
import { Views } from "./Views";

export const CardFooter = (props) => {
  const [isLiked, setLike] = React.useState(false);
  return (
    <div className="card-footer">
      <div className="footer-icon" onClick={() => setLike(!isLiked)}>
        <Likes isLiked={isLiked} />{" "}
        <span className="count">
          {isLiked ? Number(props.likes + 1) : props.likes}
        </span>
      </div>
      <div className="footer-icon">
        {" "}
        <Shares />
        <span className="count">{props.shares}</span>
      </div>
      <div className="footer-icon">
        {" "}
        <Views /> <span className="count">{props.views}</span>
      </div>
    </div>
  );
};
