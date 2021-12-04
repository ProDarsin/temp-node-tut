const os = require('os')
const user = os.userInfo();
//info about current user
console.log(user)
// method return system uptime in seconds
console.log(`the system uptime is ${os.uptime()}`);
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOs);