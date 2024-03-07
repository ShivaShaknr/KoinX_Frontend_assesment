import React from 'react'
import mobimage from './mob.png';
import './aboutcard.css';

function Aboutcard() {
  return (
    <div className='already1'>
               <div className='image_already'>
               <img src={mobimage} className='img_a'></img>
               </div>
               <div className='content_already'>
               <h3>Calculate <br/>Profits</h3>
               <button className='btn_c_a'>Check Now</button>
               </div>
   </div>
  )
}

export default Aboutcard