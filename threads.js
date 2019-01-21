process.env.UV_THREADPOOL_SIZE = 2

const crypto = require('crypto')

const startTime = Date.now()

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
    console.log('1:', Date.now() - startTime)  
})

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
    console.log('2:', Date.now() - startTime)  
})

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
    console.log('3:', Date.now() - startTime)  
})

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
    console.log('4:', Date.now() - startTime)  
})

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
    console.log('5:', Date.now() - startTime)  
})
