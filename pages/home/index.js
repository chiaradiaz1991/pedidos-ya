import React from "react";
// import HeadTag from "../../components/Head";
import styles from './styles.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <HeadTag /> */}
        <h1 className={styles.title}>Pedidos YA</h1>
      </div>
    );
  }
}

export default Index;
