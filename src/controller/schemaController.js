const express = require('express');
const router = express.Router();
const { connectToMongoDb } = require('../config/mongoClientConfig');
const { processScehma, addNewSchema } = require('../service/schemaService');

router.get('/all', async (req, res) => {
    try {
        const mongoDb = await connectToMongoDb();
        const collection = mongoDb.collection('templates');
        const users = await collection.find({}).toArray();
        processScehma(users[0]);


        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        
        res.status(200).send(users)
    } catch(err) {
        console.error(err);
        res.status(500).send({
            message: "Error"
        })
    }
});

router.post('/submit', async (req, res) => {
    try {
        const requestBody = req.body;
        console.log('Request Body:', requestBody);
        const result = addNewSchema(requestBody);

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');


        res.status(200).send(result)
    } catch(err) {
        console.error(err);
        res.status(500).send({
            message: "Error"
        })
    }
});

router.get('/get', async (req, res) => {
    const requestBody = req.body;
    console.log('Request Body:', requestBody);
    res.send('Received request body');
});

module.exports = router;
