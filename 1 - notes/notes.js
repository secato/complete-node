const fs = require('fs')
const path = require('path')
const filename = 'notes-data.json'
const filepath = path.join(__dirname, filename)

const fetchNotes = () => {
    try {
        // before add a new we need to read the existent (if exists)
        return JSON.parse(fs.readFileSync(filepath))
    } catch (error) {
        // if the error is different from file not exists
        if (error.code !== 'ENOENT') {
            console.log('Cannot parse the file to JSON!')
            console.log(error.message)
            console.log('Moving data file to ' + filepath + '.corrupt')
            fs.renameSync(filepath, filepath + '.corrupt')
        }
        return []
    }
}

const saveNotes = notes => {
    // writing as string on disk 
    fs.writeFileSync(filepath, JSON.stringify(notes))
}

function addNote(title, body) {

    // get all notes from file (empty if doens't exist)
    let notes = fetchNotes()

    // avoid notes with the same titles
    let duplicateNotes = notes.filter(note => note.title === title)
    if (duplicateNotes.length === 0) {

        // adding a note object with title and body properties
        const note = { title, body }
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

function getAll() {

}

function getNote(title) {
    let notes = fetchNotes()
    return notes.filter(note => note.title === title)[0]

}

function removeNote(title) {
    let notes = fetchNotes()
    let filteredNotes = notes.filter(note => note.title !== title)
    saveNotes(filteredNotes)
}

module.exports = { addNote, getAll, getNote, removeNote }