import express from 'express';
const app = express();
const router = express.Router();

router.get('/employees/:id', function(req, res) {
    res.json( {id: req.params.id} );
});

app.use('/', router);

export default app;
