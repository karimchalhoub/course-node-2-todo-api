//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');//destructuring object OR mongodb library

// new obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(`Unable to connect to mongodb server.`);
    }
    console.log(`Connected to mongodb server.`);

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    //
    // })
    //
    db.collection('Users').insertOne({
        //id: '123',
        User: 'Karim Chalhoub',
        age: 35,
        location: 'Los Angeles, CA'
    }, (err, result) => {
        if (err) {
          console.log(`Unable to insert user`);
        }
        console.log(result.ops[0]._id.getTimestamp());

    });

    db.close();
})
