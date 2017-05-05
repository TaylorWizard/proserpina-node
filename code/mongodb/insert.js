let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017/proserpina';

// let insertData = (db, callback) => {
//   let collection = db.collection('tb2');
//   let data = [{ "name": 'wilson001', "age": 21 }, {
//     "name": 'wilson002', "age": 22
//   }];
//   collection.insert(data, (err, result) => {
//     if (err) {
//       console.log('Error: ', err)
//       return
//     }
//     callback(result)
//   })
// }

// MongoClient.connect(DB_CONN_STR, (err, db) => {
//   console.log("connect successfully");
//   insertData(db, (result) => {
//     console.log(result)
//     db.close()
//   })
// })