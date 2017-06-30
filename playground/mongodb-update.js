//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// object destructing..
// var user = {name: 'jed', age:46};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5955ea699fa33b1f134c8d79")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5955c5c8b47b828de073f84d')
    // }, {
    //     $set: {
    //         name: 'LDH'
    //     }
    // },{
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result);
    // });

        db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5955c5c8b47b828de073f84d')
    }, {
        $inc: {
            age : 1
        }
    },{
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });

    //db.close();
});