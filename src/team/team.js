import React from 'react'
import Teamcard from './teamcard'
import manimage from './man.png'


function Team() {
  return (
    <div className='team_main_div'>
        <h3>Team</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <Teamcard image ={manimage}name='John smith' designation='Developer'/><br/>
        <Teamcard image={manimage}name='Joseph' designation='Designer'/><br/>
        <Teamcard image={manimage}name='Janne' designation='Developer'/>
    </div>
  )
}

export default Team