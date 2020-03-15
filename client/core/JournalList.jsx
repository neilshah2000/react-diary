import React, {useEffect, useState} from 'react';
import { listAll } from './../journal/api';
import { Link, BrowserRouter as Router, Switch  } from 'react-router-dom';
import { createBrowserHistory } from "history";

export default function JournalList() {
    const [journals, newJournals] = useState([]);

    useEffect(() => {
        listAll().then((data) => {
            newJournals(data)
        }, console.error);
    }, []);

    function getJournalUrlString(journalId) {
        return "/journal/" + journalId;
    }

    return (
        <div>
            <h4>new journal list page</h4>
            <ul>
                {journals.map((journal) => {
                    return (
                        <li key={journal._id}><Link to={"/journal/"+journal._id}>{journal.name}</Link></li>
                    )
                })}
            </ul>
            <Link to="/journal/5e638d62c313f303d568cd21">journal</Link>
        </div>
    )
}