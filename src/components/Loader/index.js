import React from "react";
import { Shimmer } from "react-shimmer";

import "./loader.css";
export const Loader = () => (
  <div className="loader-container">
    <div className="shim-container">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
        <Shimmer key={x} className="loading-shimmer" width={250} height={250} />
      ))}
    </div>

    <div className="lds-circle">
      <div></div>
    </div>
  </div>
);
