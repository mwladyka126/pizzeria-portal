import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const demoOrder = [
  {
    table: '1',
    name: 'pizza',
    option: ['feta', 'paprica', 'olives'],
    amount: 1,
    price: '222',
  },
  {
    table: 'remote',
    name: 'salad',
    option: ['feta', 'tomato', 'olives', 'butter'],
    amount: 1,
    price: '222',
  },
];

const Kitchen = () => (
  <Paper className={styles.component} elevation={9}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Dish</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrder.map((order) => (
          <TableRow key={order}>
            <TableCell component="th" scope="row">
              {order.table}
            </TableCell>
            <TableCell>{order.name}</TableCell>
            <TableCell>{order.option.join(',')}</TableCell>
            <TableCell>
              {' '}
              <FormControlLabel
                control={<Checkbox value="ready" color="primary" />}
                label="ready"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
