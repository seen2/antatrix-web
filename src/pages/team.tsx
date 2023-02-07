import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

export default function Team() {
  return (
    <div className='bg-dark text-light' >
      <Header />
      <p className='display-3 text-center'>Meet Our Team</p>

      <Footer />
    </div>
  );
}
