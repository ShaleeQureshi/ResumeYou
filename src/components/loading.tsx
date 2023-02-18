import React from "react";
import { PropagateLoader } from "react-spinners";

interface LoadingComponentInterface {
  heading: string;
}

const override: object = {
  marginLeft: "50%",
  marginRight: "auto",
  width: "fit-content",
};

const Loading = (props: LoadingComponentInterface) => {
  return (
    <div className="center">
      <h1 className="loading-heading">{props.heading}</h1>
      <PropagateLoader
        size={10}
        color="#36d7b7"
        speedMultiplier={0.5}
        cssOverride={override}
      />
    </div>
  );
};

export default Loading;
