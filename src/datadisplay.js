import React from "react";
const DataDisplay = ({ data }) => (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
  export default DataDisplay;