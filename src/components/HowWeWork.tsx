import React from "react";
import ProcessIcon from "./ProcessIcon";

export default function HowWeWork() {
  return (
    <div
      style={{
        height: 500,
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="bg-dark"
    >
      <h1 className="d-flex text-light justify-content-center">
        Our Work Flow
      </h1>
      <hr />

      <div
        style={{
          height: 200,
          padding: 30,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ProcessIcon />
      </div>

      <div className="d-flex flex-row text-light flex-wrap justify-content-around">
        <h3>1. Requirement Gethering </h3>
        <h3>2. Architecture Desgining </h3>
        <h3>3. Development </h3>
        <h3>4. Testing & Quality Analysis </h3>
        <h3>5. Delivery </h3>
        <h3>6. Maintainence & Support</h3>
      </div>
    </div>
  );
}
