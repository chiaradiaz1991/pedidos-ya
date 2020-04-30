import React from 'react';
import styles from './styles.scss';


class SelectZone extends React.Component {
  constructor(props) {
    super(props);

    this.zones= ['Capital Federal', 'Zona Norte', 'Zona Sur'];

    this.state = {
      selectedZone: this.zones[0]
    };
  }
  render() {
    const { selectedZone } = this.state
    return (
      <div className={styles.selectedZoneContainer}>
        <div className={styles.selectedZone}>
          <span>{selectedZone}</span>
        </div>
      </div>
    )
  }
};

export default SelectZone;