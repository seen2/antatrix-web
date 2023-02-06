import React from "react";
import Input from "./Input";
// import Bubble from "./Bubble";
import TextArea from "./TextArea";
// import Logo from "../../public/BrandLogo.png";

import { Button, Stack } from "react-bootstrap";
import Image from "next/image";

export default function EnquiryForm() {
  return (
    <div style={{height:390}} className="bg-dark border-top " >
      <Stack  gap={4}>
      {/* <Image
        src={Logo}
        alt="Picture of the author"
        width={"100"}
        height={"50"}
        /> */}
        <Input
          name="subject"
          title="Subject"
          placeholder="Enter your Business Name"
        />
        <TextArea  placeholder="Enter the description of what you need" title="Description" />

        <Button variant="primary">Get Your Quot...</Button>
       <br/>
      </Stack>
      <br />
    </div>
  );
}
