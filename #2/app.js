const express = require('express');

const port = 3000;
const app = express();
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
    res.render('index', {
        pageTitle: 'Node.js',
        pageBody: "Hello!!"
    });
});

app.listen(port);