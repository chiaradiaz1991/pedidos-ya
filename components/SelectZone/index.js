import React from 'react';
import styles from './styles.scss';


class SelectZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedZone: "",
      active: false,
      initialZones: [],
      zones: [],
      inputValue: '',
    };
  }

  async componentDidMount() {
    const getZones = await fetch('http://localhost:3000/api/zones');
    const getZonesJson = await getZones.json();

    this.setState({
      selectedZone: getZonesJson.length > 0 ? getZonesJson[0].name : '',
      zones: getZonesJson,
      initialZones: getZonesJson,
    })
  }

  handleClick() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
    });
  }

  handleChange(position) {
    this.setState({
      selectedZone: this.state.zones[position].name,
      active: false,
      inputValue: "",
      zones: this.state.initialZones,
    })
  }

  filterZones(e) {
    const value = e.target.value;
    const result = this.state.initialZones.filter(z => {
      return z.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    });
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
            onChange={(e) => this.filterZones(e)}
            value={inputValue}
          />
          <ul>
            {zones.map((zone, index) => {
              return (
                <li key={index} onClick={() => this.handleChange(index)}>{zone.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
};

export default SelectZone;