import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { create } from './../journal/api';
import { Journal } from './../journal/journal-model';

const useStyles = makeStyles({
    card: {
      maxWidth: 600,
      margin: 'auto',
      marginTop: '10px'
    },
    title: {
      padding: '5px',
      color: 'blue'
    },
    media: {
      minHeight: 330
    }
});

export default function Home() {
    const classes = useStyles();
    function onCreateButtonClicked() {
        const myJournal = new Journal('test');
        create(myJournal);
    }
    return (
        <div>
            <Card className={classes.card}>
            <Typography type="headline" component="h2" className=
            {classes.title}>
                Home Page
            </Typography>

            <CardContent>
                <Typography type="body1" component="p">
                    Welcome to the Mern Skeleton home page
                </Typography>
                <Button variant="contained" color="primary" onClick={onCreateButtonClicked}>Create Journal</Button>
            </CardContent>
            </Card>
        </div>
    )
}