import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';


export default function about() {
  return (
    <div className='bg-dark text-light' >
      <Header />
      <p className='display-3 text-center'>About Us</p>
      <p className="container lead">
        Antatrix is a Software company that provides you the software solutions for various organizations.

        Our vision is to create software that is reusable compatible for longer support, maintainable, and will be based on modern technologies.
        We will provide you with the best solution available for you.

        We provide our solutions World Wide to several types of companies.
      </p>
      <Footer />
    </div>
  )
}
