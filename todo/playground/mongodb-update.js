const { MongoClient, ObjectID } = require('mongodb')

MongoClient
  .connect('mongodb://localhost:27017/TuduApp', { useNewUrlParser: true })
  .then(client => {
    const db = client.db()

    db.collection('Todos')
      .findOneAndUpdate(
        { _id: new ObjectID('5bbe1428fb918631e836644a') },
        { $set: { completed: false } },
        { returnOriginal: false }
      )
      .then(console.log)

    client.close()
  })
  .catch(console.error)

// // creating object id on the fly
// const obj = new ObjectID()
// console.log(obj)
