const { MongoClient, ObjectID } = require('mongodb')

MongoClient
  .connect('mongodb://localhost:27017/TuduApp', { useNewUrlParser: true })
  .then(client => {
    const db = client.db()

    // deleteMany
    db.collection('Todos')
      .deleteMany({ text: 'What you gonna do' })
      .then(res => console.log(res.result))

    // deleteOne
    db.collection('Todos')
      .deleteOne({ text: 'When they come for you' })
      .then(res => console.log(res.result))

    // findOneAndDelete
    db.collection('Todos')
      .findOneAndDelete({ text: 'Getting data back' })
      .then(console.log)

    client.close()
  })
  .catch(console.error)

// // creating object id on the fly
// const obj = new ObjectID()
// console.log(obj)
