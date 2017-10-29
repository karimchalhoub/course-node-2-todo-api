// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Conncted to MongoDB server');

// // deleteMany
//   // db.collection('Users').deleteMany({User: 'Karim Chalhoub'}).then((result) => {
//   //   console.log(result);
//   // });
// // deleteOne
// // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
// //   console.log(result);
// // });
// // findOneAndDelete
// db.collection('Users').findOneAndDelete({_id: new ObjectID("59f6261ba1d04892f5301bdc")}).then((results) =>{
//   console.log(JSON.stringify(results, undefined, 2));
//   });

//findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59ae23af417a76f0c1b9ba95")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("593362f7b8a179626370c421")
  }, {
    $set: {
      User: 'Karim'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((results) => {
      console.log(results);
    })
  //db.close();
});
