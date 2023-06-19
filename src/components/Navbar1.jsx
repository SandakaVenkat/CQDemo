import React from 'react';
import {Link} from 'react-scroll';
import user from '../images/user1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear,faBell } from '@fortawesome/free-solid-svg-icons';
function Navbar1  ()  {
  return (
    <nav>
      <p className='name'>DemoCompany</p>
      <ul className='menu'>
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Pricing</li>
        <li>Blog</li>
     </ul>
     <div className='icons'>
     <a href="#"><FontAwesomeIcon icon={faGear} /></a>
     <a herf="#"><FontAwesomeIcon icon={faBell} /></a>
     </div>
      
      <div className='photo'><img src={user} alt=''/></div>
    </nav>
  )
}

export default Navbar1