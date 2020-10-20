export const ADD_FEATURE = "ADD_FEATURE";
export const addFeatures = (features) => {
  return {
    type: ADD_FEATURE,
    payload: features,
  };
};

export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = (features) => {
  console.log("Remove Feature Action", features.id);
  return {
    type: REMOVE_FEATURE,
    payload: features,
  };
};
