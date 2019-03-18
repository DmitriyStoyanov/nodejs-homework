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

export default products;
