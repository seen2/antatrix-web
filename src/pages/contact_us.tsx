import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

export default function contact_us() {
  return (
    <div className='bg-dark text-light' >
      <Header />
      <div className="container d-flex justify-content-around text-center">

      <p className="display-6">
      Mail: <a href="" className="lead ">antatrix.contact@gmail.com </a>
      </p>
      <p className="display-6">
      Phone: <a href="" className="lead ">+91-1234567890</a>
      </p>
      
      </div>
      <hr/>
      <Footer />
    </div>
  );
}
