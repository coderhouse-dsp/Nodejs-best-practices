const {app} = require("./server")
const {db} =  require("./models/db")
const log = require('debug')('app:run')
async function run (){
    await db.sync()
    console.log('Database is ready')
    app.listen(2929,()=>{
        log('Server started on http://localhost:2929')
    })
}
run()