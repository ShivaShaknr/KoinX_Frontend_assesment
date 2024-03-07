import React from 'react'
import './insidenav.css';

function Insidenav() {
  return (
    <>
    <div className='insidenav'>
        <nav className='in_nav'>
            <li><a href='#'>Overview</a></li>
            <li><a href='#'>Fundamentals</a></li>
            <li><a href='#'>New Insights</a></li>
            <li><a href='#'>Sentiments</a></li>
            <li><a href='#'>Team</a></li>
            <li><a href='#'>Technicals</a></li>
            <li><a href='#'>Tokenomics</a></li>
        </nav>
    </div>
    <hr className='hr'/>
    </>
  )
}

export default Insidenav