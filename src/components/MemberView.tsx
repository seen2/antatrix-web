import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Card from 'react-bootstrap/Card';



export default function MemberView(props:{name:string,designation:string,description:string,image:StaticImageData}) {
  return (
    <Card className='bg-dark text-light' style={{ width: '25rem' }}>
      <Image
      src={props.image}
      alt="Name"
      className="card-img"
      height={300}
      />
      <Card.Body>
        <Card.Title>{props.name || "First Last"} ( {props.designation})</Card.Title>
        <Card.Text>
          {props.description||""}
        </Card.Text>
        {/* <Button variant="primary">ReadMore</Button> */}
      </Card.Body>
    </Card>
  )
}
