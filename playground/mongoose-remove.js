const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59fbca2d64ccae475925f773';
// var id2 = '59f67f03561f0208b1091b0a';

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id:'59fe589a2beaacb7cfc1906a'}).then((todo) => {
//   console.log(todo);
// });
// //
// Todo.findByIdAndRemove('59fe589a2beaacb7cfc1906a').then((todo) => {
//   console.log(todo);
// });
