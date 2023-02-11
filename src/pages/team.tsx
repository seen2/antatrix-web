import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import MemberView from '@/components/MemberView';
import { teamData } from '@/util/data';

export default function Team() {
  return (
    <div className='bg-dark text-light' >
      <Header />
      <p className='display-3 text-center'>Meet Our Team</p>
      <div className="d-flex container justify-content-between flex-wrap">
      {teamData.sort((a,b)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        else return 0;
        
      }).map(member=><MemberView {...member} />)}
      </div>
      <Footer />
    </div>
  );
}
