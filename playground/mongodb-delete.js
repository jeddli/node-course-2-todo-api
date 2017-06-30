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

    //deleteMany
    // db.collection("Todos").deleteMany({text: 'Eat lunch'}).then( (result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection("Todos").deleteOne({text: 'Eat lunch'}).then( (result) => {
    //     console.log(result);
    // });

    // findOne and delete
    // db.collection("Todos").findOneAndDelete({completed: false}).then( (result) => {
    //     console.log(result);
    // });

    //db.collection('Users').deleteMany( {name:'Jed'});
   
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5955c20a7b2cbf8f102dfaa7')})
    .then( (result) => {
        console.log(JSON.stringify(result, undefined,2));
    });

    //db.close();
});