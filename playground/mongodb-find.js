const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5955c0e8c64db523ac378971')
    // }).toArray().then( (docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify( docs, undefined, 2) );
    // }, (err) => {        
    //     console.log('Unable to fetch todo', err);
    // });

    db.collection('Users').find({name: 'Jed'}).toArray().then( (docs) => {
        console.log(JSON.stringify( docs, undefined, 2) );
    });
});