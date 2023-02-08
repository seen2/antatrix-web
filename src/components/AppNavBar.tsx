import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../public/BrandLogo.png";
import Link from 'next/link';
import { Colors } from '@/util/constants';
import { EnquiryModal } from './EnquiryModal';


function BasicExample() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <Image
        src={Logo}
        alt="Picture of the author"
        width={"100"}
        height={"50"}
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          <Link className='nav-link' href={"/"}>Home</Link>
            <EnquiryModal ><Nav.Link onClick={()=>{}}>Enquiry</Nav.Link></EnquiryModal>
            <Link className='nav-link' href={"/careers"}>Careers</Link>
            <Link className='nav-link' href={"/about"}>About</Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <Link className='dropdown-item' href={"/team"}>Our Team</Link>
              <Link className='dropdown-item' href={"/pricing"}>Pricing</Link>
              <Link className='dropdown-item' href={"/testimonials"}>Testimonials</Link>
              <NavDropdown.Divider />
              <Link className='dropdown-item' href={"/contact_us"}>Contact Us</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;