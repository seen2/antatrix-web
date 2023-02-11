import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import DevBanner from '@/components/DevBanner';

export default function careers() {
  return (
    <div className='bg-dark text-light' >
      <Header />
      <p className='display-3 text-center'>Careers</p>
      <p className="text-muted display-6 text-center">Coming Soon</p>
      <DevBanner />
      <Footer />
    </div>
  );
}
