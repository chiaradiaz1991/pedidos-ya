import React from 'react';
import styles from './styles.scss';
import NavBar from '../NavBar';
import Search from '../Search';

class Header extends React.Component {
  render() {
    return (
      <header
			style={{
				backgroundImage: `url(${this.props.backgroundImg})`
				}}
				className={styles.header}
			>
        <NavBar />
        <Search />
      </header>
    )
  }
};

export default Header;