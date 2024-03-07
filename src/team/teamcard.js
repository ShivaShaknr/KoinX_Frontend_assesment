import React from 'react'
import manimage from './man.png'
import './teamcard.css'

function Teamcard(props) {
  return (
     <div className='teamcard_main'>
        <div className='image_side'>
        <img src={props.image} className='team_img'></img>
        {/* <p>{props.name}<br/>{props.designation}</p> */}
        </div>
        <div className='content_teamcard'>
        <p><b>{props.name} {props.designation}</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
     </div>
  )
}

export default Teamcard