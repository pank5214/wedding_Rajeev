import React from 'react';
import vivahLogo from '../images/vivahLogo.jpg';
const Header = () => {
		return (
			<header>
				<div className="container">
					<a className="logo" href="#"><img src={vivahLogo} alt="Logo" /></a>
				</div>
			</header>
		);
}

export default Header;