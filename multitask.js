const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()
doRequest = () => {
    https
    .request('https://www.google.com', res => {
        res.on('data',() => {})
        res.on('end', () => {
           console.log('HTTP Request:', Date.now() - start)
        })
    })
    .end()
}

doHash = () => {
    crypto.pbkdf2('a','b',100000,512,'sha512',() => {
        console.log('Hash:', Date.now() - start)  
    })
}

doRequest()
fs.readFile('multitask.js', 'utf8', () => {
    console.log('FileRead:', Date.now() - start)
})

doHash()
doHash()
doHash()
doHash()