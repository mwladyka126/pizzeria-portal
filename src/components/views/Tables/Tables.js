import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}>Booking 123</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/abc`}>Event abc</Link>
  </div>
);

export default Tables;
