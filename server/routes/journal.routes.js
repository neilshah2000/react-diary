import express from 'express';
import journalCtrl from '../controllers/journal.controller';
import promptCtrl from '../controllers/prompt.controller';

const router = express.Router();

router.route('/prompt')
  .get(promptCtrl.list)

router.route('/journal')
  .get(journalCtrl.list)
  .post(journalCtrl.create);

router.route('/journal/:journalId')
  .get(journalCtrl.read)
  .put(journalCtrl.update)
  .delete(journalCtrl.remove);

router.param('journalId', journalCtrl.journalByID);

export default router;