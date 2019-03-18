import express from 'express';
import users from '../models/users';

const router = express.Router();

router.get('/api/users', (req, res, next) => {
    res.json(users);
    next();
});

export default router;
