const express = require('express')
const path = require('path')
const hbs = require('hbs') // template engine handlebars
const app = express()

// setting template engine
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerPartials(path.resolve(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs')

// public folder
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.render('index', {
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