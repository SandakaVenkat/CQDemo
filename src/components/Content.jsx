import React from 'react';
import {Link} from 'react-scroll';
import { useHistory } from 'react-router-dom';
function Content  () {
  return (
    <div id='hell'>
        <ul className='book-m'>
        <li><Link to='./All.jsx' >All</Link></li>
        <li><Link to='/src/components/All.jsx' >Technology</Link></li>
        <li><Link to='offer' >Education</Link></li>
        <li><Link to='about' >Lifestyle</Link></li>
        <li><Link to='contact' >Healthcare</Link></li>
        <li><Link to='contact' >Sport</Link></li>
        <li><Link to='contact' >Food</Link></li>
     </ul>
     
    </div>
  )
}

export default Content