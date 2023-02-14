import React from "react";
import ProcessIcon from "./ProcessIcon";

export default function HowWeWork() {
  return (
    <div
      style={{
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="bg-dark"
    >
      <div >
      <p className=" display-3 text-light text-center shadow-lg p-3 mb-5 bg-body-tertiary">
        Our Work Flow
      </p>
      <div
        style={{
          padding: 70,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ProcessIcon />
      </div>
      </div>

      <div style={{
        display: "block",
        padding:20

      }} className=" text-light">

        <p className="h2 container border-top border-start text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded border-secondary">Requirement Gethering </p>
        <p className="h2 container border-top border-start text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded border-secondary">Architecture Desgining </p>
        <p className="h2 container border-top border-start text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded border-secondary">Development </p>
        <p className="h2 container border-top border-start text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded border-secondary">Testing & Quality Analysis </p>
        <p className="h2 container border-top border-start text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded border-secondary">Delivery </p>
        <p className="h2 container border-top border-start text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded border-secondary">Maintainence & Support</p>
      </div>
    </div>
  );
}
