import React from 'react'
import Aboutcard from './aboutcard'
import './about.css'


function About() {
  return (
    <div className='about'>
       <h3>About Bitcoin</h3>
       <h3>What is Bitcoin</h3>
       <p>Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.</p>
       <h3>Lorem ipsum Dolar</h3>
       <p>Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.</p>
       <p>Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.</p>
       <p>Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.</p>
       <h3>Already holding Bitcoin</h3>
       <div className='already'>
         <div className='already1'>
             <Aboutcard/>
         </div>
         <div className='already2'>
            <Aboutcard/>
         </div>
       </div>
       <p>Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.</p>
    </div>
  )
}

export default About