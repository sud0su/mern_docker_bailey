const mongoose = require("mongoose");

const connectToDB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
    });
    // eslint-disable-next-line no-console
    console.log(`MongoDB connected: ${connect.connection.host}`);
};

module.exports = connectToDB;
