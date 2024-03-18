const express = require('express');
const router = express.Router();
const { addNewSchema, getAllTemplate } = require('../service/schemaService');

router.get('/all', async (req, res) => {
    try {

        const templateFromDb = getAllTemplate();
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');


        res.status(200).send(testTemplates)
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
        templateFromApi = {
            schemaId: Math.floor(Math.random() * (10000000000 - 100000000 + 1)) + 100000000,
            schema: requestBody
        };
        console.log('Request Body:', templateFromApi);
        const result = addNewSchema(templateFromApi);

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
