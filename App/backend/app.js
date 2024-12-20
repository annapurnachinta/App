const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;

const Routes = require("./route/route.js")

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})

// npm start