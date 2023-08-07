// os module - build-in module used to interact with the operating system and also retrive information about it
const os = require('os'); // importing os module

const user = os.userInfo(); // it returns an object contaning info about the current user like username, user id
console.log(user);

const timeSec = os.uptime()// returns the system uptime in seconds
const timeHour = ((timeSec / 60) /60)
console.log(timeHour)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(), // returns the system total memory
    freeMem: os.freemem() // return the free system memory
}
console.log(currentOs)