import React from 'react';
import image1 from '../images/Rectangle 1073.png';
import image2 from '../images/Rectangle 1075.png';
import image3 from '../images/Rectangle 1077.png';
import image4 from '../images/Rectangle 1079.png';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Todo  ()  {
  return (
        <div>
        <div className='col-1'>
        <div className="image-row">
        <img src={image1} alt=''/>
        <img src={image2} alt=''/>
        <img src={image3} alt=''/>
        <img src={image4} alt=''/>
        </div>
        </div>

        <div className='col-2'>
        <div className='just-row'>
        <div className="container">
        <p>LIFESTYLE</p>
        <h2>Changing people's lifestyles for the better</h2>
        <p4>2 hours ago</p4>
        <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet </p2>
        <p3>learn more  <FontAwesomeIcon icon={faArrowRight}/></p3>
        </div>
        <div className="container">
        <p>TECHNOLOGY</p>
        <h2>Simple Solutions for Complex Connections</h2>
        <p4>2 hours ago</p4>
        <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet </p2>
        <p3>learn more   <FontAwesomeIcon icon={faArrowRight}/></p3>
        </div>
        <div className="container">
        <p>SPORT</p>
        <h2>All things are difficult before they are easy</h2>
        <p4>2 hours ago</p4>
        <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet </p2>
        <p3>learn more   <FontAwesomeIcon icon={faArrowRight}/></p3>
        </div>
        <div className="container">
        <p>EDUCATION</p>
        <h2>How to Memorize everything you read?</h2>
        <p4>2 hours ago</p4>
        <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet </p2>
        <p3>learn more  <FontAwesomeIcon icon={faArrowRight}/></p3>

        </div>
        </div>
         </div>
        </div>
  )
}

export default Todo
