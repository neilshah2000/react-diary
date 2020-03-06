export class Journal {
    name;
    created;
    updated;
    journalEntries;

    constructor(name) {
        this.name = name;
        this.created = new Date();
        this.updated = new Date();
        this.journalEntries = [];
    }
}