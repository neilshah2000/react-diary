import Journal from '../models/journal.model';
import _ from 'lodash';
import errorHandler from '../helpers/dbErrorHandler';

const create = (req, res, next) => {
    const journal = new Journal(req.body);
    journal.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.status(200).json({
            message: "Journal Created"
        });
    });
};

const list = (req, res) => {
    Journal.find((err, journals) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(journals);
    }).select('name email updated created');
};

// journalByID() called first
// req.journal will contain a journal
// type object from DB
const read = (req, res) => {
    return res.json(req.journal);
};

// journalByID() called first
// req.journal will contain a journal
// type object from DB
const update = (req, res, next) => {
    let originalJournal = req.journal;
    newJournal = _.extend(originalJournal, req.body);
    newJournal.updated = Date.now();
    newJournal.save((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(journal);
    });
};

// journalByID() called first
// req.journal will contain a journal
// type object from DB
const remove = (req, res, next) => {
    let originalJournal = req.journal;
    originalJournal.remove((err, deletedJournal) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(deletedJournal);
    });
};

/// helper //
const journalByID = (req, res, next, id) => {
    Journal.findById(id).exec((err, journal) => {
        if (err || !journal) {
            return res.status('400').json({
                error: "User not found"
            });
        }
        req.journal = user;
        next();
    });
};

export default { create, read, list, remove, update, journalByID };