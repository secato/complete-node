const express = require('express')
const fs = require('fs')
const path = require('path')
const hbs = require('hbs') // template engine handlebars
const app = express()

// setting template engine
hbs.registerPartials(path.resolve(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs')

// hbs helpers
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear())
hbs.registerHelper('screamIt', text => text.toUpperCase())


// simple logger
// next to keep the middleware chaining (middleware design pattern)
app.use((req, res, next) => {
    let now = new Date().toString()
    let log = `${now}: ${req.method} ${req.url}`
    console.log(log)
    fs.appendFile('server.log', log + '\n', err => {
        if (err)
            console.log('Unable to append to server.log')
    })
    // call next function
    next()
})

app.use((req, res, next) => {
    res.render('maintenance')
})

app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.render('index', {
        welcomeMessage: 'Hello World!',
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/pingpong', (req, res) => {
    res.send({
        ping: 'pong'
    })
})

app.listen(3003, console.log('Server started'))