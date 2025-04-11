import React from "react";
import { company } from "./Data";
function Partners() {
  return (
    <div>
      <h2>With Great Outcomes.</h2>
      <h4>Our customers have gotten offers from awesome companies.</h4>
      <div>
        {company?.map((index, img) => (
          <div key={index}>
            <img src={img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
