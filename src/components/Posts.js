import React from "react";
import { Card } from "./Card";
import Image, { Shimmer } from "react-shimmer";

export const Posts = (props) => {
  const [showDetails, setDetails] = React.useState(null);
  const { postData } = props;
  return (
    <div className="post-container">
      <h1 className="page-title">Posts</h1>
      <hr />
      <div className="row" id="row">
        {postData.map((x) => (
          <>
            <Card
              onClick={() => {
                document.body.style.overflow = "hidden";
                setDetails(x);
              }}
              {...x}
              key={x.id}
            />
          </>
        ))}
      </div>
      <PostDetails
        onBlur={() => {
          document.body.style.overflowY = "scroll";
          setDetails(null);
        }}
        {...showDetails}
      />
    </div>
  );
};

const PostDetails = (props) => {
  const { event_name, event_date, onBlur, thumbnail_image } = props;
  return (
    <div
      style={{
        transform: props.event_name ? "translateY(0px)" : "translateY(2000px)",
        transition: "all 1s",
      }}
      className="details-container"
    >
      <div className="close" onClick={onBlur}>
        X
      </div>
      <div className="post-details">
        <div className="font-24">Event Name: {event_name}</div>
        <div className="font-20">
          Posted On: {new Date(Number(`${event_date}000`)).toDateString()}
        </div>
        <div className="details-image">
          <Image
            fallback={<Shimmer className="image" width={250} height={250} />}
            src={thumbnail_image}
            alt="thumbnail"
          />
        </div>
      </div>
    </div>
  );
};
