const express = require('express');

const getProducts = require('./getProducts');

const getProduct=require('./getProduct')

const app = express();

const port = 3009;


app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(3009,()=> {
    console.log('Server listening on port: ${3009}');
});


