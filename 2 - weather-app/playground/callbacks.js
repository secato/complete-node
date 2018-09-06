const getUser = (id, callback) => {
    const user = {
        id,
        name: 'Felipe'
    }

    setTimeout(() => {
        callback(user)
    }, 3000);
}

console.log('Geting user with id 17 from the dark and deep ocean')
getUser(17, data => {
    console.log(data)
})