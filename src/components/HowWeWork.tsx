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
      <p className="d-flex display-3 text-light justify-content-center ">
        Our Work Flow
      </p>
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

      <div className="d-flex flex-lg-row text-light flex-wrap justify-content-between">
        <li className="lead">Requirement Gethering </li>
        <li className="lead">Architecture Desgining </li>
        <li className="lead">Development </li>
        <li className="lead">Testing & Quality Analysis </li>
        <li className="lead">Delivery </li>
        <li className="lead">Maintainence & Support</li>
        </div>
    </div>
  );
}
