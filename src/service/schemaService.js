const { connectToMongoDb } = require('../config/mongoClientConfig');


const processScehma = (schema) => {
    console.log("method from the service call let's go boi " + JSON.stringify(schema) );
    return -1;
}

const addNewSchema = async (schema) => {
    console.log("writing the schema to user: " + schema);
    const mongoDb = await connectToMongoDb();
    const userCollection = mongoDb.collection('users');
    try {
        const result = await userCollection.insertOne(schema);
        console.log("db write status: ", result.acknowledged);
    } catch (error) {
        console.error("error while writing the element to db");
        throw error;
    }
    
}

module.exports = { processScehma, addNewSchema };