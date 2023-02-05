import WebDevBanner from "../../public/WebDev.jpg";
import AppDevBanner from "../../public/AppDev.jpg";
// import SolutionsBanner from "../../public/Solutions.jpg";

import Image from "next/image";

import Carousel from "react-bootstrap/Carousel";

import EnquiryForm from "./EnquiryForm";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={WebDevBanner}
          height={360}
          // unoptimized
          quality={90}
          alt="Picture of the author"
        />

        <Carousel.Caption>
          <h3>Full stack Website Development</h3>
          <p>Complete Website Solution.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={AppDevBanner}
          // unoptimized
          height={360}

          quality={90}
          alt="Picture of the author"
        />

        <Carousel.Caption>
          <h3>Full stack Application</h3>
          <p>Full stack Native Application Development</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <EnquiryForm  />

        <Carousel.Caption>
          {/* <h3>Services</h3>
          <p>Enquiry</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
