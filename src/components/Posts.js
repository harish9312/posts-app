import React from "react";
import { Card } from "./Card";

export const Posts = (props) => {
  const { postData } = props;
  return (
    <div>
      <h1>Posts</h1>
      <div className="posts">
        {postData.map((x) => (
          <Card {...x} key={x.id} />
        ))}
      </div>
    </div>
  );
};
