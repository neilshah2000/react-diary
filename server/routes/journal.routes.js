import express from 'express';
import journalCtrl from '../controllers/journal.controller';

const router = express.Router();

router.route('test').get((req, res) => {
    return res.json({test: 'test'});
});

router.route('').get((req, res) => {
    return res.json({test: ''});
});

router.route('/').get((req, res) => {
    return res.json({test: '/'});
});

router.route('/test').get((req, res) => {
    debugger;
    console.log('test');
    return res.json({test: '/test'});
});

router.route('/journal')
  .get(journalCtrl.list)
  .post(journalCtrl.create);

router.route('/journal/:journalId')
  .get(journalCtrl.read)
  .put(journalCtrl.update)
  .delete(journalCtrl.remove);

router.param('journalId', journalCtrl.journalByID);

export default router;