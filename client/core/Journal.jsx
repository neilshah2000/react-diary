import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getJournal, updateJournal } from './../journal/api';
import { JournalEntry } from './../journal/journalEntry.model';
import { Journal } from './../journal/journal.model';


export default function Journal2() {
    let { journalId } = useParams();
    const [journalData, setJournalData] = useState(null);
    const [entry, setEntry] = useState('');
    const [journalDate, setJournalDate] = useState(new Date());

    useEffect(() => {
        getJournal(journalId).then((data) => {
            const myJournal = new Journal().parse(data);
            setJournalData(myJournal);
            const myEntry = myJournal.getEntry(new Date());
            setEntry(myEntry);
            console.log(data);
        }, console.error);
    }, [journalId]);

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
            setJournalData(data);
        }, console.error);
    };

    const incDateClicked = () => {
        const newDate = new Date();
        newDate.setDate(journalDate.getDate() + 1);
        setJournalDate(newDate);
        setEntry(journalData.getEntry(newDate));
    }

    const decDateClicked = () => {
        const newDate = new Date();
        newDate.setDate(journalDate.getDate() - 1);
        setJournalDate(newDate);
        setEntry(journalData.getEntry(newDate));
    }

    const homeDateClicked = () => {
        setJournalDate(new Date());
        setEntry(journalData.getEntry(new Date()));
    }

    return (
        <div>
            <div>journal data loaded</div>
            <div>{journalDate.toString()}</div>
            <textarea
                value={entry.entry}
                onChange={handleEntry}
                onBlur={handleBlur}>
            </textarea>
            <button onClick={decDateClicked}>Dec</button>
            <button onClick={homeDateClicked}>Home</button>
            <button onClick={incDateClicked}>Inc</button>
        </div>
    );

}