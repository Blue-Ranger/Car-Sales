import React from "react";
import { connect } from "react-redux";
import { addFeatures } from "../Actions/ActionsIndex";

const AdditionalFeature = (props) => {
  console.log("look!!", props.addFeatures);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.addFeatures(props.feature)}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

