import express from 'express';
import {
  createPage,
  deletePage,
  updatePage,
  getPage,
} from '../Controller/userController.js';
const router = express.Router();

router.post('/add', createPage);
router.get('/:id', getPage);
router.post('/:id', updatePage);
router.delete('/:id', deletePage);

export default router;
