require('dotenv').config();

const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const profilesRoutes = require('./routes/profiles');

const app = express();

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

app.use('/api/profilesRoutes', profilesRoutes)