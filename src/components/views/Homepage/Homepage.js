import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className={styles.component}>
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link
        className="App-link"
        to="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </header>
  </div>
);

export default Homepage;
