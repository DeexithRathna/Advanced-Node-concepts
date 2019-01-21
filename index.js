const cluster = require('cluster')

if(cluster.isMaster){
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()

}else{  
    const express = require('express')
    const app = express()    
    const doNothing = (duration) => {
        const start = Date.now()
        while(Date.now() - start  < duration ){
        }
    }    
    app.get('/', (req, res) => {
        doNothing(5000)
        res.send('Hello World')
    })

    app.get('/fast',(req, res) => {
        res.send('fast page')
    })
    
    app.listen(3000)
}
