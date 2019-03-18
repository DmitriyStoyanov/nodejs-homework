import express from 'express';
import _ from 'lodash';
import products from '../models/products';

const router = express.Router();

router.get('/api/products', (req, res, next) => {
    res.json(products);
    next();
});

router.get('/api/products/:id', (req, res, next) => {
    const product = _.find(products, {id: Number(req.params.id)});
    if (product === undefined) {
        res.status(404)
            .json({message: `product with id ${req.params.id} not found`});
    } else {
        res.json(product);
    }
    next();
});

router.get('/api/products/:id/reviews', (req, res, next) => {
    const product = _.find(products, {id: Number(req.params.id)});
    if (product === undefined || product.reviews === undefined) {
        res.status(404)
            .json({message: `product with id ${req.params.id} not found or reviews not found`});
    } else {
        res.json(product.reviews);
    }
    next();
});

export default router;
