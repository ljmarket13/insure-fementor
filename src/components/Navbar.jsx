import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {
	return (
		<div>
			<nav className="menu-container">
			  <a href="#" className="menu-logo">
			    <img src={logo} alt="logo"/>
			  </a>
			  <div className="menu">
			    <ul>
			      <li>
			        <a href="#">How we work</a>
			      </li>
			      <li>
			        <a href="#">Blog</a>  
			      </li>
			      <li>
			        <a href="#">Account</a> 
			      </li>
						<button className="menuBtn">View Plans</button>
			    </ul>
			  </div>
			</nav>
		</div>
	)
}

export default Navbar;
