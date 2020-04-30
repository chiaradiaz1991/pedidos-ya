import React from 'react';
import styles from './styles.scss';

class NavBar extends React.Component {
	render() {
		return (
			<nav className={styles.nav}>
				<div className={styles.logoContainer}>
					<img src="https://live.pystatic.com/webassets/common/logo-es-3f7be267ae60c49c55f747799efa5753.svg" />
				</div>
				<ul className={styles.listContainer}>
					<li>
						Ayuda en línea
				</li>
					<li>
						Registrarse
				</li>
					<li>
						Ingresá
				</li>
				</ul>
			</nav>
		)
	}
};

export default NavBar;