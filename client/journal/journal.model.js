import { JournalEntry } from './journalEntry.model';

export function Journal() {
    this._id = '';
    this.name = '';
    this.created = new Date();
    this.updated = new Date();
    this.journalEntries = [];
    // this.journalMap = new Map();

    this.parse = function(journalJson){
        this._id = journalJson._id;
        this.name = journalJson.name;
        this.created = journalJson.created;
        this.updated = journalJson.updated;
        if (Array.isArray(journalJson.journalEntries)) {
            journalJson.journalEntries.forEach(je => {
                this.journalEntries.push(new JournalEntry().parse(je));
            });
        }
        
        return this;
    };

    // if there is already a journal entry on that day,
    // will replace it. Otherwise add it
    this.setEntry = function(newJournalEntry){
        const oldEntry = this.journalEntries.find((je) => {
            return sameDay(je.date, newJournalEntry.date);
        });
        if (typeof oldEntry === 'undefined') {
            this.journalEntries.push(newJournalEntry);
        } else {
            oldEntry.entry = newJournalEntry.entry;
        }
    }

    // returns either the latest journla entry or new one
    this.getLatestEntry = function() {
        if (this.journalEntries.length > 0) {
            return this.journalEntries.pop();
        } else {
            return new JournalEntry();
        }
    };

    // returns either the existing journal on that date
    // or a new journal
    this.getEntry = function(myDate) {
        const existingJournal = this.journalEntries.find(je => {
            return sameDay(je.date, myDate);
        });
        if (typeof existingJournal !== 'undefined') {
            return existingJournal;
        } else {
            return new JournalEntry();
        }
    };


    function sameDay(d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }
}