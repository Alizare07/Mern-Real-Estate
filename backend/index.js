import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { error } from 'console'
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("connect to database")
}).catch((error)=>{
    console.log(error)
})


const app = express()


app.listen(3000, ()=>{
    console.log('server is running on port 3000!!')
})