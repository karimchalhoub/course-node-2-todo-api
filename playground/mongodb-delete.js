const {MongoClient, ObjectID} = require('mongodb');//destructuring object OR mongodb library

// new obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(`Unable to connect to mongodb server.`);
    }
    console.log(`Connected to mongodb server.`);

    // deleteMany()
    // db.collection('Todos').deleteMany({Text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });
    //deleteOne()
    // db.collection('Todos').deleteOne({Text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });
    //findOneAndDelete()
    db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
      console.log(result);
    });
//    db.close();
  });
