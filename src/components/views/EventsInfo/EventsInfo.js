import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventsInfo.module.scss';

const EventsInfo = ({ id }) => (
  <div className={styles.component}>
    <h2>EventsInfo view</h2>
    {id}
  </div>
);
EventsInfo.propTypes = {
  id: PropTypes.string,
};

export default EventsInfo;
