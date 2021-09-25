import React from 'react';
import introDesktop from '../images/desktop/image-intro-desktop.jpg';
import rightBg from '../images/desktop/bg-pattern-intro-right-desktop.svg';
import leftBg from '../images/desktop/bg-pattern-intro-left-desktop.svg';
 
const Header = () => {
	return (
		<div>
			<header className="banner">
			<img src={leftBg} alt="leftBg" className="leftBg" />
				<div className="topTxt">
					<h1>Humanizing your insurance.</h1>
					<p>Get your life insurance coverage easier and faster. We blend our expertise 
  					 and technology to help you find the plan that’s right for you. Ensure you 
  					 and your loved ones are protected.
					</p>
					<button className="topBtn">View Plans</button>
				</div>
				<img src={introDesktop} alt="intro" className="introImg" />
				<img src={rightBg} alt="rightBg" className="rightBg" />
				
			</header>
		</div>
	)
}

export default Header
