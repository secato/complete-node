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

