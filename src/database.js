const mongoose = require('mongoose');

/*
const URI = process.env.MONGOD_URL;
mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log("DB is Connected"))
    .catch(err => console.error(err));
    */
   
const URI = "mongodb://localhost/notes-db-app";
mongoose.connect(URI, (err, db) => {
    if(err) {
        throw err
    }
    else {
        console.log("Db is Connected");
        //db.close();
    }
    
});