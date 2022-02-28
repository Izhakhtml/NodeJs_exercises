const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDB is connected"))
    .catch((err)=> console.error(err));
module.exports = mongoose.connection;