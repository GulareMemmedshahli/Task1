const express = require('express')
const app = express()
const port = 8000
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
const { Schema } = mongoose;

app.use(cors())
app.use(bodyParser.json())

const customerSchema = new Schema({
    img: String,
    description:String,
    title:String,
    name:String,
    price:String,
    img2:String,
})

const Customer = mongoose.model('/customer', customerSchema);

app.get('/customer', (req, res) => {
Customer.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }
    
})
})

app.get("/customer/:id",(req,res)=>{
    const id=req.params.id
    Customer.findById(id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }
    })
})

app.post("/customer",(req,res)=>{
   let customers=new Customer({
    img:req.body.img,
    description:req.body.description,
    title:req.body.title,
    name:req.body.name,
    price:req.body.price,
    img2:req.body.img2,
   })
   customers.save()
})

app.delete("/customer/:id",(req,res)=>{
    const id=req.params.id
    Customer.findByIdAndDelete(id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }
    })
})


mongoose.connect('mongodb+srv://gulare:gulareM@cluster0.mg9m8t8.mongodb.net/?retryWrites=true&w=majority',
(err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }
}
);
