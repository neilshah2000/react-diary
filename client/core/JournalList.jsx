import React from 'react'
import { listAll } from './../journal/api';


export default function JournalList() {

    listAll()
    .then(console.log, console.error);
    
    return (
        <div>
            new journal list page
        </div>
    )
}