import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getJournal, updateJournal } from './../journal/api';
import { JournalEntry } from './../journal/journalEntry.model';
import { Journal } from './../journal/journal.model';

export default function Journal2() {
    let { journalId } = useParams();
    const [journalData, setJournalData] = useState(null);
    const [entry, setEntry] = useState('');

    useEffect(() => {
        getJournal(journalId).then((data) => {
            const myJournal = new Journal().parse(data);
            setJournalData(myJournal);
            const myEntry = myJournal.getLatestEntry();
            setEntry(myEntry);
            console.log(data);
        }, console.error);
    }, [journalId]);

    const handleEntry = (evt) => {
        setEntry(evt.target.value);
    };

    const handleBlur = () => {
        console.log('save entry: ' + entry);
        journalData.journalEntries.push(entry);
        updateJournal(journalData).then((data) => {
            setJournalData(data);
        }, console.error);
    };

    return (
        <div>
            <div>journal data loaded</div>
            <textarea
                value={entry.entry}
                onChange={handleEntry}
                onBlur={handleBlur}>
            </textarea>
        </div>
    );

}