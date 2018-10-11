const { MongoClient, ObjectID } = require('mongodb')

MongoClient
  .connect('mongodb://localhost:27017/TuduApp', { useNewUrlParser: true })
  .then(client => {
    const db = client.db()

    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5bbe1428fb918631e836644a') })
    //   .toArray()
    //   .then(console.log)

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(console.log)

    db.collection('Users')
      .find({ name: 'Xuxu' })
      .count()
      .then(console.log)

    db.collection('Users')
      .find({ name: 'Xuxu' })
      .toArray()
      .then(console.log)

    client.close()
  })
  .catch(console.error)

// // creating object id on the fly
// const obj = new ObjectID()
// console.log(obj)
