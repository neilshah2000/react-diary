import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getJournal } from './../journal/api';

export default function Journal2() {
    let { journalId } = useParams();
    const [journal, journalLoaded] = useState(null)

    useEffect(() => {
        getJournal(journalId).then((data) => {
            journalLoaded(data)
        }, console.error);
    }, [journalId]);

    return (
        <div>
            journal page
        </div>
    )
}