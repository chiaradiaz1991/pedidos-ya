import React from 'react';
import styles from './styles.scss';


class SelectZone extends React.Component {
  constructor(props) {
    super(props);

    this.zones = ['Capital Federal', 'Zona Norte', 'Zona Sur', 'Campana'];

    this.state = {
      selectedZone: this.zones[0],
      active: false,
      zones: this.zones,
      inputValue: '',
    };
  }

  handleClick() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
    });
  }

  handleChange(position) {
    this.setState({
      selectedZone: this.zones[position],
      active: false,
      inputValue: "",
      zones: this.zones,
    })
  }

  filterZones (e) {
    const value = e.target.value;
    const  result = this.state.zones.filter(z => z.toLowerCase().indexOf(value.toLowerCase()) > -1);
    this.setState({
      inputValue: value,
      zones: result,
    }) 
  }

  render() {
    const { selectedZone, active, zones, inputValue } = this.state
    return (
      <div className={styles.selectedZoneContainer}>
        <div className={styles.selectedZone} onClick={() => this.handleClick()}>
          <span>{selectedZone}</span>
        </div>
        <div className={
          active
            ? `${styles.listContainer} ${styles.visible}`
            : styles.listContainer
        }
        >
          <input 
          type="text" 
          placeholder="buscar ciudad" 
          onChange={(e)=> this.filterZones(e)}
          value={inputValue}
          />
          <ul>
            {zones.map((zone, index) => {
              return (
                <li key={index} onClick={() => this.handleChange(index)}>{zone}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
};

export default SelectZone;