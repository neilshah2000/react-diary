import React, {useEffect, useState} from 'react'
import { listAll } from './../journal/api';
import { Link } from 'react-router-dom'

export default function JournalList() {
    const [journals, newJournals] = useState([]);

    useEffect(() => {
        listAll().then((data) => {
            newJournals(data)
        }, console.error);
    }, []);

    return (
        <div>
            <h4>new journal list page</h4>
            <ul>
                {journals.map((journal) => <li key={journal._id}>{journal.name}</li>)}
            </ul>
            <Link to="/journal/5e4429fbe8fa3444a8fcdd94">journal</Link>
        </div>
    )
}