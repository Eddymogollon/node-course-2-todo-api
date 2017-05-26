// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result.value);
    // });



    //Challenge
    db.collection('Users').deleteMany({name: 'Eddy'}).then((result) => {
        console.log('Deleted brah');
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5921a1b2aa23e01ffe8f2757')}).then((result) => {
        console.log(result.value);
    });
    
    //db.close();
});