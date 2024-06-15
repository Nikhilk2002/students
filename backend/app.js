require('dotenv').config();
const express = require('express');
const dbconnect = require('./config/dbConnection');
const studentRouter = require('./Controller/studentController'); 

const app = express();

dbconnect.dbConnect();

app.use(express.json());

app.use('/api', studentRouter); 

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
