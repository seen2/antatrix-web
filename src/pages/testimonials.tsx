import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

export default function Testimonials() {
  return (
    <div className='bg-dark text-light' >
      <Header />
      <p className='display-3 text-center'>Testimonials</p>

      <Footer />
    </div>
  );
}
