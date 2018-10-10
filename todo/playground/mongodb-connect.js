const { MongoClient } = require('mongodb')

MongoClient
  .connect('mongodb://localhost:27017/TuduApp', { useNewUrlParser: true })
  .then(client => {
    console.log('Connected to MongoDB server')
    const db = client.db('TuduApp')

    const todo = { text: 'Something to do', completed: false }
    db.collection('Todos')
      .insertOne(todo)
      .then(result => console.log(JSON.stringify(result.ops, undefined, 2)))

    const user = { name: 'Felipe', age: 28, location: 'Brazil' }
    db.collection('Users')
      .insertOne(user)
      .then(result => console.log(JSON.stringify(result.ops, undefined, 2)))

    client.close()
  })
  .catch(err => console.error(err))
