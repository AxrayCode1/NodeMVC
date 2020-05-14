const express = require('express');

const app = express();

app.use('/',(req, res , next) => {
    console.log('This always run');
    next();
})

app.use('/add-product',(req, res , next) => {
    console.log('In the middleware');
    res.send('<h1>The Add Product</h1>')
})

app.use('/',(req, res , next) => {
    console.log('In another middleware');
    res.send('<h1>Hello World</h1>')
})

app.listen(3000);