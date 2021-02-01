import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>new booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}> booking id</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>new booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}> booking id</Link>
  </div>
);

export default Tables;
