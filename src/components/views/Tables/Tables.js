import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const demoAvailability = [
  {
    hour: '12:00',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    hour: '12:30',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'null' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    hour: '13:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
];
const renderActions = (status) => {
  switch (status) {
    case 'null':
      return (
        <Button
          color="secondary"
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/new`}
        >
          {' '}
          Booking possible
        </Button>
      );
    case 'booked':
      return (
        <Button
          className={styles.booked}
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/123`}
        >
          Booked
        </Button>
      );
    case 'event':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/events/abc`}
        >
          Event
        </Button>
      );
    default:
      return null;
  }
};

const Tables = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Paper className={styles.component} elevation={9}>
      <ButtonGroup>
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/new`}
        >
          {' '}
          New reservation
        </Button>
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/events/new`}
        >
          {' '}
          New event
        </Button>
      </ButtonGroup>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoAvailability.map((row) => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              {row.tables.map((table) => (
                <TableCell key={row.table} component="th" scope="row">
                  {renderActions(table.status)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tables;
