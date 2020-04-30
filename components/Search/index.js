import React from 'react';
import styles from './styles.scss';
import SelectZone from '../SelectZone';


class Search extends React.Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        <h2 className={styles.searchTitle}>¡Volá con tu delivery online!</h2>
        <div className={styles.searchContainer}>
          <div className={styles.addressContainer}>
            <label>Dirección de entrega</label>
            <div className={styles.address}>
              <i></i>
              <SelectZone />
              <input className={styles.input} placeholder="calle y número" type="text" />
            </div>
          </div>
          <div className={styles.typeContainer}>
            <label>Restaurante o comida rápida</label>
            <div className={styles.type}>
              <i></i>
              <input className={styles.input} placeholder="pizza" type="text" />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Buscar</button>
          </div>
        </div>
      </div>
    )
  }
};

export default Search;