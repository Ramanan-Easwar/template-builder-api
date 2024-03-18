const { connectToMongoDb } = require('../config/mongoClientConfig');


const addNewSchema = async (schema) => {
    console.log("writing the schema to user: " + JSON.stringify(schema));
    // add a id key
    const mongoDb = await connectToMongoDb();
    const userCollection = mongoDb.collection('users');
    try {
        const result = await userCollection.insertOne(schema);
        console.log("db write status: ", result.acknowledged);
    } catch (error) {
        console.error(error);
    }
}

const getAllTemplate = async () => {
    const mongoDb = await connectToMongoDb();
    const collection = mongoDb.collection('templates');
    const testTemplates = await collection.find({}).toArray();
    return testTemplates;
}

module.exports = { addNewSchema, getAllTemplate };