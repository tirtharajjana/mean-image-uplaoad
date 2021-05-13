require('dotenv').config();

const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const profilesRoutes = require('./routes/profiles');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Accept, X-Custom-Header, Authorization'
    ); next();
});

const ports = process.env.PORT || 3000;

mongoose.connect(
    "mongodb://localhost:27017/mean", { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    app.listen(ports, console.log(`server is running on port ${ports}`));
})
    .catch((err) => { console.log("Could not connect to the server ", err) })


app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join('images')));

app.use('/api/profiles', profilesRoutes);