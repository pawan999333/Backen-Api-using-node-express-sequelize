const express=require('express')
const app=express();
const db=require('./config/database')

const postRouter = require('./routes/postRouter');

app.use(express.json());

const PORT=8000;
app.use('/', postRouter);

db.authenticate();
app.listen(PORT, ()=>{
    console.log(`server is connected at port: ${PORT}`);
})