export class Journal {
    name;
    created;
    updated;

    constructor(name) {
        this.name = name;
        this.created = new Date();
        this.updated = new Date();
    }
}