import express from 'express';

import { getPost } from '../controllers/get-post';

const router = express.Router();

router.get('/api/posts/:id', getPost);

export { router as getPostRouter };