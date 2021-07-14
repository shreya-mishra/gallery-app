import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const loading = ({ size = 100 }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}>
      <CircularProgress style={{ width: size, height: size, color: "wheat" }} />
      ;
    </div>
  );
};

export default loading;
