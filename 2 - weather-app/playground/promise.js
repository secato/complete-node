const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number')
                resolve(a + b)
            else
                reject('This function accepts only numbers')

        }, 1000)
    })
}

asyncAdd(2, 3).then(result => console.log(result))

asyncAdd(2, 'a')
    .then(result => console.log(result))
    .catch(error => console.log(error))

const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey, It worked!')
        // reject('Unable to fulfill promise')
    }, 1500)
})
const somePromise2 = new Promise((resolve, reject) => {
    // resolve('Hey, It worked2!')
    reject('Unable to fulfill promise')
})

somePromise
    .then((result) => {
        console.log(result)
        return somePromise2
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))






