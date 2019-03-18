import express from 'express';
import _ from 'lodash';
const router = express.Router();

const products = [
    {
        id: 1,
        name: 'Supreme T-Shirt',
        brand: 'Supreme',
        price: 99.99,
        options: [
            {color: 'blue'},
            {size: 'XL'}
        ],
        reviews: [
            {
                user: 'anonymous',
                message: 'Very cool t-shirt'
            },
            {
                user: 'Joe',
                message: 'Too big for my size'
            }
        ]
    },
    {
        id: 2,
        name: 'Kelvin T-Shirt',
        brand: 'Kelvin',
        price: 39.95,
        options: [
            {color: 'red'},
            {size: 'XXL'}
        ],
        reviews: [
            {
                user: 'anonymous',
                message: 'Not bad'
            }
        ]
    }
];

router.get('/api/products', (req, res, next) => {
    res.json(products);
    next();
});

router.get('/api/products/:id', (req, res, next) => {
    let product = _.find(products, {id: Number(req.params.id)});
    if (product === undefined) {
        res.status(404)
            .json({message: `product with id ${req.params.id} not found`});
    } else {
        res.json(product);
    }
    next();
});

router.get('/api/products/:id/reviews', (req, res, next) => {
    let product = _.find(products, {id: Number(req.params.id)});
    if (product === undefined || product.reviews === undefined) {
        res.status(404)
            .json({message: `product with id ${req.params.id} not found or reviews not found`});
    } else {
        res.json(product.reviews);
    }
    next();
});

export default router;
