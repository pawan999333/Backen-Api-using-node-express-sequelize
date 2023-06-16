const express=require('express')
const app=express();
app.use(express.json());
const db=require('./config/database')

const Router = require('./router/userRouter.js')
app.use('/', Router)


const PORT=8000;
db.authenticate().then(()=>{
    console.log("server is connected")
    // console.log(data);
}).catch((error)=>{
    console.log(error)
})

app.get('/',(req,res)=>{
    res.status(200).json({
        status:1,
        message:"Hello World"
    })
})
app.listen(PORT, ()=>{
    console.log(`server is connected at port: ${PORT}`)
})