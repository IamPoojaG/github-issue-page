import express from 'express';
import {
  createIssue,
  updateIssue,
  getIssue,
  getIssueByOpen,
  getAllIssue,
} from '../Controller/issueController.js';
const router = express.Router();

router.post('/add', createIssue);
router.get('/:id', getIssue);
router.get('/open/closed', getIssueByOpen);
router.get('/', getAllIssue);
router.put('/:id', updateIssue);

export default router;
