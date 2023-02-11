import DigitalContactView from '@/components/DigitalContactView'
import MapView from '@/components/MapView'
import UsefulLinks from '@/components/UsefulLnks'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-dark  p-100 text-light' >
      <h3 className=' text-center text-muted display-6'><u>Reach to us</u></h3>
      <hr/>

      
      <div className="d-flex flex-wrap justify-content-around">

      <MapView />
      <UsefulLinks />
      <DigitalContactView />
      </div>
      <hr/>
      <p className='lead text-center'>All right reserved Antatrix @ 2023</p>
      
    </div>
  )
}
