const mongoose = require("mongoose")

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/plantsdb"
mongoose.connect(MONGODB_URI, {useUnifiedTopology:true, useNewUrlParser:true}).then(() => {
    console.log("MongoDB connection successful")
}).catch(err => {
    console.error("Connection error", err.message)
})

const db = mongoose.connection

module.exports = db;