import React from 'react';
import logo from '../../assests/graphics/logo.jpg';
import './styles.scss';

const Header =(props) => {
 return (
     <header>
         <div className="wrap">
             <div className="logo">
               <img src={logo} alt="logo" />
             </div>
         </div>
     </header>
 )
}

export default Header;
