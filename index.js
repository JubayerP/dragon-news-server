const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Dragon News Server is Serving');
})

app.listen(port,() => {
    console.log('Dragon is Running on Port:',port);
})