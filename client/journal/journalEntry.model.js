export class JournalEntry {
    date;
    entry;

    constructor(entry) {
        this.date = new Date();
        this.entry = entry;
    }
}