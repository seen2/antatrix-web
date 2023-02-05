import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import React from "react";
import { Colors } from "@/util/constants";

export default function TextArea(props:{title:string,placeholder:string,name?:string,value?:string}) {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" style={{color:Colors.light}} label={props.title||""}>
        <Form.Control
          as="textarea"
          placeholder={props.placeholder||""}
          style={{ height: '100px',color:Colors.light,background:Colors.dark, borderColor:Colors.light }}
        />
      </FloatingLabel>
    </>
  );
}
