// every file is module in nodejs
// modules are used to encapsulate code , to break problem in smaller parts

// by default every variable or funtions are of private scope means visible only inside that module only

const Hello = require('./4-fun') // importing the sayHello function of fun.js module
const names = require('./5-names') // importing the exports object of name.js module

Hello(`${names.firstName} ${names.lastName}`)
Hello('Samraat')

