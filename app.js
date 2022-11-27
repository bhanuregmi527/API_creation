require('dotenv').config();
//async errors

const express=require('express');
const app= express();
const connectDB=require('./db/connect')
const eventRouter=require('./routes/events')

// middleware
// const notFound=require('./middleware/notFound');
const errorhandlerMiddleware=require('./middleware/errorhandlerMiddleware');
//
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('root route is listining in port')
})
app.use('/api/v3/app',eventRouter)

// 

// app.use(notFound)
app.use(errorhandlerMiddleware)
const port= process.env.PORT|| 3000;

const start=async()=>{
    try{
// connectDB
await connectDB(process.env.MONGO_URI)
app.listen(port,console.log(`server is listening in ${port}...`))
    }catch(error){
console.log(error)
    }
}

start();
