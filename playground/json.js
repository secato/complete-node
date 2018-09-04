let obj = {
    name: 'Felipe'
}

// obj to string
let stringObj = JSON.stringify(obj)

console.log(obj)
console.log(stringObj)

// string (json) to obj
let personString = '{"name":"Felipe","age": 25}'
let personObj = JSON.parse(personString)

console.log(personString)
console.log(personObj)
console.log("Name: ", personObj.name, " - Age: ", personObj.age)
console.log('')

console.log('Types:')
console.log(typeof personString)
console.log(typeof personObj)


// writing to file system
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'notes.json')
console.log(filePath)


const objNote = {
    title: 'This is my note',
    body: 'Need to do this'
}

const stringNote = JSON.stringify(objNote)
fs.writeFileSync(filePath, stringNote)

const noteStringFromFile = fs.readFileSync(filePath)

const note = JSON.parse(noteStringFromFile)
console.log(typeof note)
console.log(note.title, ' - ', note.body)



