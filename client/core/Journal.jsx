import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getJournal, updateJournal, getPrompts } from './../journal/api';
import { Journal } from './../journal/journal.model';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import HomeIcon from '@material-ui/icons/Home';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    date: {
        fontSize: '40pt',
    },
    journalName: {
        fontSize: '80pt',
    },
    prompt: {
        fontSize: '20pt',
    },
    journalTextArea: {
        width: '600pt',
    },
    container: {
        textAlign: 'center',
    },
    footer: {
        position: 'fixed',
        bottom: '0pt',
        width: '100%'
    }
});

export default function Journal2() {
    const classes = useStyles();
    let { journalId } = useParams();
    const [journalData, setJournalData] = useState(null);
    const [entry, setEntry] = useState('');
    const [journalDate, setJournalDate] = useState(new Date());
    const [prompts, setPrompts] = useState([]);
    const [randomPrompt, setRandomPrompt] = useState('');

    useEffect(() => {
        getJournal(journalId).then((data) => {
            const myJournal = new Journal().parse(data);
            setJournalData(myJournal);
            const myEntry = myJournal.getEntry(new Date());
            setEntry(myEntry);
            console.log(data);
        }, console.error);
    }, [journalId]);

    useEffect(() => {
        getPrompts().then((data) => {
            console.log(data);
            setPrompts(data);
        }, console.error);
    }, []);

    useEffect(() => {
        chooseRandomPrompt();
    }, [prompts]);

    const chooseRandomPrompt = () => {
        const rand = prompts[Math.floor(Math.random() * prompts.length)];
        setRandomPrompt(rand);
    };

    const handleEntry = (evt) => {
        setEntry(evt.target.value);
    };

    const handleBlur = () => {
        console.log('save entry: ' + entry);
        journalData.journalEntries.push({
            date: journalDate,
            entry: entry
        });
        updateJournal(journalData).then((data) => {
            const myJournal = new Journal().parse(data);
            setJournalData(myJournal);
        }, console.error);
    };

    const incDateClicked = () => {
        const newDate = new Date(journalDate);
        newDate.setDate(journalDate.getDate() + 1);
        setJournalDate(newDate);
        console.log(newDate);
        setEntry(journalData.getEntry(newDate));
        chooseRandomPrompt();
    }

    const decDateClicked = () => {
        const newDate = new Date(journalDate);
        newDate.setDate(journalDate.getDate() - 1);
        setJournalDate(newDate);
        console.log(newDate);
        setEntry(journalData.getEntry(newDate));
        chooseRandomPrompt();
    }

    const homeDateClicked = () => {
        setJournalDate(new Date());
        setEntry(journalData.getEntry(new Date()));
        chooseRandomPrompt();
    }

    const formatJournalDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        return day + ' ' + month;
    };

    const onDateNavigationClicked = (event, newValue) => {
        if(newValue === 'Dec') decDateClicked();
        if(newValue === 'Home') homeDateClicked();
        if(newValue === 'Inc') incDateClicked();
    };

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Typography type="headline" component="h1" className={classes.journalName}>
                    {journalData? journalData.name : null}
                </Typography>
                <Typography type="headline" component="h1" className={classes.date}>
                    {formatJournalDate(journalDate)}
                </Typography>
                {randomPrompt &&
                    <Typography type="headline" component="h1" className={classes.prompt}>
                        {randomPrompt.text}
                    </Typography>}
                <TextareaAutosize
                    rowsMin={20}
                    className={classes.journalTextArea}
                    value={entry.entry}
                    onChange={handleEntry}
                    onBlur={handleBlur}>
                </TextareaAutosize>
            </Container>
            <BottomNavigation className={classes.footer} onChange={onDateNavigationClicked}>
                <BottomNavigationAction label="Dec" value="Dec" icon={<LeftIcon/>} />
                <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon/>} />
                <BottomNavigationAction label="Inc" value="Inc" icon={<RightIcon/>} />
            </BottomNavigation>
        </React.Fragment>
    );

}