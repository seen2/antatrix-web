import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import TechExplained from '@/components/TechExplained';
import { services } from '@/util/data';



export default function Pricing() {
  return (
    <div className='bg-dark text-light' >
      <Header />
      <p className='h1 container'>Our Pricing</p>
      {services.map(service=><TechExplained title={service.title} image={service.images} content={service.content} price={service.price} feaures={service.features} />)}

      
      <Footer />
    </div>
  );
}
