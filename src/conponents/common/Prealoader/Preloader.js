import React from "react";
import Loader from "react-js-loader";

let Preloader = (props) => {
  return (
    <>
      {" "}
      <div className={"loader"}>
        <div className={"item"}>
          <Loader type="bubble-scale" bgColor={"#0c0c48"} size={100} />
        </div>
      </div>
    </>
  );
};

export default Preloader;
