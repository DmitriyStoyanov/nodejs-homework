import express from 'express';
import products from './routes/products';
import users from './routes/users';
import queryParser from './middlewares/queryParser';
import cookieParser from './middlewares/cookieParser';

const app = express();


app.use('/', products)
    .use('/', users)
    .use(queryParser)
    .use(cookieParser);

export default app;
