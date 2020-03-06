import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getJournal } from './../journal/api';

export default function Journal2() {
    let { journalId } = useParams();
    const [journalData, setJournalData] = useState(null)

    useEffect(() => {
        getJournal(journalId).then((data) => {
            setJournalData(data);
            console.log(data);
        }, console.error);
    }, [journalId]);


    if (journalData) {
    return (<div></div>);
    } else return (
        <div>
            journal page
        </div>
    )
}