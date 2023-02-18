const express = require("express");
const connection = require("./db")
const contractsRoutes = require("./routes/contracts")
const userRoutes = require("./routes/user")
const app= express()
app.use("/user", userRoutes)
app.use("/contracts",contractsRoutes)
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("done")
})
app.listen(7000,async()=>{
    try{
       await connection
       console.log("connected")
    }
    catch(err){
           console.log(err)
    }
})
