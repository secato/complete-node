const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  })
})

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Felipe Secato',
      age: 28
    },
    {
      name: 'Master user',
      age: 33
    },
    {
      name: 'Paulo Secato',
      age: 60
    }
  ])
})

app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app
