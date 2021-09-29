import logo from '../images/logo.svg';
import { foot } from '../data/foot';
import { icons } from '../data/icons';
import { useState } from 'react';
 
const Footer = () => {

	const [icon, setIcon] = useState(icons)

	return (
		<div>
			<footer>
				<div className="footerIcon">
				<img src={logo} alt="logo" className="footerLogo" />
					{icons.map(({id, icon}) => (				
						<div key={id} className="icon">
							<img src={icon} alt="icon" />
						</div>
					))}
				</div>
			</footer>
		</div>
	)
}

export default Footer
