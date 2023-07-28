// build in modules

// os module
const os = require('os');

const user = os.userInfo();
console.log(user);

const timeSec = os.uptime()
const timeHour = ((timeSec / 60) /60)
console.log(timeHour)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)