import express from 'express';
import products from './routes/products';
import users from './routes/users';

const app = express();


app.use('/', products);
app.use('/', users);

export default app;
