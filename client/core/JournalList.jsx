import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { listAll } from './../journal/api';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TodayIcon from '@material-ui/icons/Today';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        textAlign: 'center',
    },
    title: {
        fontSize: '40pt',
    },
}));

export default function JournalList() {
    const [journals, newJournals] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        listAll().then((data) => {
            newJournals(data)
        }, console.error);
    }, []);

    function ListItemLink(props) {
        return <ListItem key={props.id} button component="a" {...props} />;
    }

    function JournalList(props) {
        return props.myJournals.map((journal) => {
            return (
                <ListItemLink id={journal._id} href={"/journal/"+journal._id}>
                    <ListItemIcon>
                        <TodayIcon/>
                    </ListItemIcon>    
                    <ListItemText primary={journal.name} secondary={journal._id}/>
                </ListItemLink>
            )
        })
    }

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Typography type="headline" component="h1" className={classes.title}>
                    Current Journal List
                </Typography>
                <div className={classes.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        <JournalList myJournals={journals}></JournalList>
                    </List>
                </div>
            </Container>
        </React.Fragment>
    )
}