import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import React from "react";
import { Colors } from "@/util/constants";

export default function Input(props:{title:string,placeholder:string,name?:string,value?:string}) {
  return (
    <>
      <InputGroup className="mb-3 bg-dark variant-dark">
        <InputGroup.Text id="basic-addon1">{props.title||"@"}</InputGroup.Text>
        <Form.Control
          placeholder={props.placeholder||""}
          aria-label={props.title||""}
          aria-describedby="basic-addon1"
          name={props.name}
          value={props.value}
          style={{ background:Colors.dark, color:Colors.light, borderColor:Colors.light }}
        />
      </InputGroup>
    </>
  );
}
