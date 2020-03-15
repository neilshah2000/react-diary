import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { create } from './../journal/api';
import { Journal } from './../journal/journal.model';

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
    // const state = {
    //     toJournal: false,
    // };
    const [toJournal, redirectToJournal] = useState(false);


    function onCreateButtonClicked() {
        const myJournal = new Journal();
        myJournal.name = 'test';
        create(myJournal).then((data) => {
            console.log('router send');
            redirectToJournal(true);
        }, (err) => {});
    }

    if (toJournal) {
        return (<Redirect to='/journal' />);
    } else return (
        <div>
            <Card className={classes.card}>
            <Typography type="headline" component="h2" className=
            {classes.title}>
                Home Page
            </Typography>
            <div>create journal is {toJournal}</div>
            <CardContent>
                <Typography type="body1" component="p">
                    Welcome to the diary app
                </Typography>
                <Button variant="contained" color="primary" onClick={onCreateButtonClicked}>Create Journal</Button>
            </CardContent>
            </Card>
        </div>
    )
}