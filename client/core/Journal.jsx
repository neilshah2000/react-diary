import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getJournal, updateJournal } from './../journal/api';
import { JournalEntry } from './../journal/journalEntry.model';

export default function Journal2() {
    let { journalId } = useParams();
    const [journalData, setJournalData] = useState(null);
    const [entry, setEntry] = useState('init');

    useEffect(() => {
        getJournal(journalId).then((data) => {
            setJournalData(data);
            console.log(data);
        }, console.error);
    }, [journalId]);

    const handleEntry = (evt) => {
        setEntry(evt.target.value);
    };

    const handleBlur = () => {
        console.log('save entry: ' + entry);
        const myEntry = new JournalEntry(entry);
        journalData.journalEntries.push(myEntry);
        updateJournal(journalData).then(console.log);
    };

    if (journalData) {
        return (
            <div>
                <div>journal data loaded</div>
                <textarea
                    value={entry || ''}
                    onChange={handleEntry}
                    onBlur={handleBlur}>
                </textarea>
            </div>
        );
    } else return (
        <div>
            journal page
        </div>
    )
}