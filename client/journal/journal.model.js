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
        journalJson.journalEntries.forEach(je => {
            this.journalEntries.push(new JournalEntry().parse(je));
        });
        return this;
    };

    // returns either the latest journla entry or new one
    this.getLatestEntry = function() {
        if (this.journalEntries.length > 0) {
            return this.journalEntries.pop();
        } else {
            return new JournalEntry();
        }
    };
}