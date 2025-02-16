const express = require('express');
const app = express()

const cors = require('cors')
app.use(cors({
    origin: 'https://metapass-orcin.vercel.app',
    credentials: true
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://harish130505:mongoshdb@harish.tcjpp.mongodb.net/passport');
const con = mongoose.connection
con.on('open',()=>{
    console.log("Connected with db...")
})

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello... from Backend!")
})

const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(9000,()=>{
    console.log("Listening on port 9000...")
})

module.exports = app
