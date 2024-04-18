const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');



const app = express()
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/testing', (req, res) => {
    res.send('Hello World! Testing')
})
app.post('/testingPost', (req, res) => {
    let abc = req.body.name;
    res.status(200).send('Hello World! ' + abc)
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/', (req, res) => {
    res.send('Hello World! post')
})

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
module.exports = app;