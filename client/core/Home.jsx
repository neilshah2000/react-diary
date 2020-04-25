import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { create } from './../journal/api';
import { Journal } from './../journal/journal.model';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    title: {
        fontSize: '40pt',
    },
    subtitle: {

    },
    container: {
        textAlign: 'center',
    },
    input: {
        marginBottom: 40
    }
});

export default function Home() {
    const classes = useStyles();
    const [toJournal, redirectToJournal] = useState(false);
    const [journalName, setJournalName] = useState('');

    function onCreateButtonClicked() {
        const myJournal = new Journal();
        myJournal.name = journalName;
        create(myJournal).then((data) => {
            console.log('router send');
            redirectToJournal(true);
        }, (err) => {});
    }

    function onInputChange(event) {
        setJournalName(event.target.value);
    }

    if (toJournal) {
        return (<Redirect to='/journal' />);
    } else return (
        <React.Fragment>
            <Container className={classes.container}>
                <Typography type="headline" component="h1" className={classes.title}>
                    Create a Daily Journal
                </Typography>
                <Box  mb={10}>
                    <Typography type="headline" component="h5" className={classes.subtitle}>
                        Note: Your journal will be viewable and editable to anyone who has the link!
                    </Typography>
                </Box>
                <div className={classes.input}>
                    <TextField id="standard-basic" label="Journal Name" onChange={onInputChange}/>
                </div>
                <Button variant="contained" onClick={onCreateButtonClicked}>CREATE A NEW JOURNAL</Button>
            </Container>
        </React.Fragment>
    )
}