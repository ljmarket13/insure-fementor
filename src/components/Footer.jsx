import logo from '../images/logo.svg';
import { foot } from '../data/foot';
import { icons } from '../data/icons';
import { useState } from 'react';
 
const Footer = () => {

	const [icon, setIcon] = useState(icons);
	const [footText, setFootText] = useState(foot);

	return (
		<div>
			<footer>
				<div className="footerLogo">
					<img src={logo} alt="logo"  />	
					<div className="footerIcon">	
						{icon.map(({id, icon}) => (				
							<div key={id} className="icon">
								<img src={icon} alt="icon" />
							</div>
						))}
					</div>
				</div>
				<div className="footerText">
					{footText.map(({id, title, list1, list2, list3, list4}) => (
						<div key={id}>
							<ul className="footerUl">
      		  		<li>{title}</li>
      		  		<li><a href="#">{list1}</a></li>
      		  		<li><a href="#">{list2}</a></li>
      		  		<li><a href="#">{list3}</a></li>
      		  		<li><a href="#">{list4}</a></li>
      				</ul>
						</div>

					))}
				</div>	
			</footer>
		</div>
	)
}

export default Footer
