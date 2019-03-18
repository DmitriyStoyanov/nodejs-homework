import express from 'express';
import products from './routes/products';

const app = express();


app.use('/', products);

export default app;
