const os = require('os')

// returns user info
const user = os.userInfo()

console.log(user)

// returns system uptime in seconds

console.log(`the system uptime is : ${os.uptime()} seconds`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}

console.log(currentOs)
