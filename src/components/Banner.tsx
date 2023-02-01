import MobileBanner from "../../public/Native-Development.jpg";
import WebDevBanner from "../../public/WebDev.jpg";


import Image from "next/image";

import Carousel from "react-bootstrap/Carousel";
import Bubble from "./Bubble";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <Image
        className="bg-dark d-block w-100"
        height={350}
        width={100}
        src={WebDevBanner}
        quality={100}
        alt="Picture of the author"
        
        />
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
      <Image
        className="bg-dark d-block w-100"
        height={350}
        src={MobileBanner}
        quality={100}
        alt="Picture of the author"
        width={"100"}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-dark d-block w-100">
          <Bubble />
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
