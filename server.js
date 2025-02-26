let express = require("express")
let app = express()
app.get("/",(req,res)=>{
    res.send(req.query)
})
app.listen(8080)