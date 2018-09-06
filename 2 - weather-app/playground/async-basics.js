console.log('Starting app')

setTimeout(() => {
    console.log('Inside of callback')
}, 2000)

// note that this is executed after the last console.log('Finishing up'), why? 
// EVENT LOOP: callstack -> Node APIs -> Callback queue
setTimeout(() => {
    console.log('Second setTimeout')
}, 0)

console.log('Finishing up')


// Execution order 
// main() function (function that wrap my code, created at runtime) KEEP ON CALL STACK until program finish
// console.log('Starting app') go on top of main, get executed and leave the call stack
// the setTimeout go on top of the stack, but since this is a Node API call it go to Node API stack and leave the call stack
// the exact same thing happens with the another setTimeout
// when the seconds of setTimeout finishs, It's not going to get executed right away. It's move down to the callback queue
// so the setTimeout with 0 seconds go first to callback queue
// and here is where the event loop comes into play. It takes a look at the call stack
// If the callstack is not empty it doesn't do anything because it cant't
// YOU CAN ONLY RUN the callback queue if the call stack is empty (including the main function)
// then the event loop move the first function in call back queue to the call stack