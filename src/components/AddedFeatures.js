import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../Actions/ActionsIndex";

import AddedFeature from "./AddedFeature";

const AddedFeatures = (props) => {
  console.log("this is", props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map((item) => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeFeature={props.removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  
  console.log(state);
  return {
    features: state.car.features,
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
