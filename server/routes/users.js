import express from 'express';

import { getUsers, createUsers, updateUsers , deleteUsers } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUsers);
router.patch('/:id', updateUsers);
router.delete('/:id', deleteUsers);

export default router;