export function JournalEntry() {
    this._id = ''
    this.date = new Date();
    this.entry = '';

    this.parse = function(journalEntryJson){
        this._id = journalEntryJson._id;
        this.date = new Date(journalEntryJson.date);
        this.entry = journalEntryJson.entry;
        return this;
    };
}