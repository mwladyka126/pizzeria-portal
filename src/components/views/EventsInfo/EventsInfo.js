import React from 'react';
import styles from './EventsInfo.module.scss';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';

const demoEvent = {
  date: '2021-02-07',
  time: '19:00',
  table: '1',
  name: 'Alvaro',
  contact: 'email@email.com',
  people: '2',
};

const EventsInfo = () => {
  const { id } = useParams();
  return (
    <Paper className={styles.component} elevation={9}>
      <Grid container justify="space-around">
        <Grid item xs={3}>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
            <RestaurantIcon />
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Typography className={styles.title} variant="h5" component="h5">
            Event {id}
          </Typography>
        </Grid>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>People</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {demoEvent.date}
            </TableCell>
            <TableCell> {demoEvent.date}</TableCell>
            <TableCell> {demoEvent.time}</TableCell>
            <TableCell> {demoEvent.table}</TableCell>
            <TableCell> {demoEvent.contact}</TableCell>
            <TableCell> {demoEvent.people}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default EventsInfo;
