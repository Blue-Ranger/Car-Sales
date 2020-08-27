import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { ADD_FEATURE, REMOVE_FEATURE } from "./Actions/ActionsIndex";

const App = () => {
  const removeFeature = (item) => {
    // dispatch to remove an item
    return {
      type: REMOVE_FEATURE,
      payload: item,
    };
  };

  const buyItem = (item) => {
    // dispatch to add an item
    return {
      type: ADD_FEATURE,
      payload: item,
    };
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App;

//run react redux dependencies
// npm install react-redux  --save
//npm install --save redux react-redux
