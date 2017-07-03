const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then( (result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({ _id:'595a0e6a9fa33b1f134e3705'}).then( (todo) =>{
//     console.log(todo);
// } );

Todo.findByIdAndRemove('595a0e6a9fa33b1f134e3705').then( (todo) =>{
    console.log(todo);
} );