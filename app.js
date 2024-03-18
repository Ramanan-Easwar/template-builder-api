const app = require('express')();
const bodyParser = require('body-parser');
const PORT = 8000;
const { connectToMongoDb } = require('./src/config/mongoClientConfig');
const schemaController  = require("./src/controller/schemaController");
const cors = require('cors');


const testMongoHealth = async () => {
    try {
        const mongoDb = await connectToMongoDb();
    } catch (err) {
        throw err;
    }
}
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use('/schema', schemaController);
app.listen(
    PORT,
    () => console.log(`we're live in port: ${PORT}`)
);
app.get('/check', (req, res) => {
    res.status(200).send({
        status:'healthy',
        type: 'api'
    })
});

testMongoHealth();