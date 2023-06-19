import React from 'react'
import { faSearch,faHippo,faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header  ()  {
    
  return (
         <div id='head'>
        <div className='head-h'>
            <h1>We tackle interesting topics every day</h1>
            
            <input type="text" placeholder="&#xF002; Find Cources"/>
            <div className='icons1'>
            <FontAwesomeIcon icon={faHippo}/>
            </div>
            <div className='icons2'>
            <FontAwesomeIcon icon={faTableCellsLarge}/>
            </div>
        </div>
        </div>
    
  )
}

export default Header