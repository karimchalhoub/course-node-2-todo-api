const {MongoClient, ObjectID} = require('mongodb');//destructuring object OR mongodb library

// new obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(`Unable to connect to mongodb server.`);
    }
    console.log(`Connected to mongodb server.`);

    // db.collection('Todos').find({
    //   _id: new ObjectID('59acf880e6b3b0467198d98e')})
    //   .toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('unable to fetch todos', err);
    // });
    //
    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('unable to fetch todos', err);
    // });
    db.collection('Users').find({User: 'Karim Chalhoub'})
      .toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('unable to fetch todos', err);
    });

//    db.close();
  });
