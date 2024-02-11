const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors())
const bodyParser = require("body-parser");
require("dotenv").config();
const port=process.env.PORT;

const stripe=require("stripe")(process.env.STRIPE_SCRETE_KEY)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("hellow world")
})

app.post("/pay", async (req, res) => {
    console.log("reqtoken",req.body.token);
    console.log("reqamount",req.body.amount);

    try {
        const charge = await stripe.charges.create({
            source: req.body.token.id,
            amount: req.body.amount,
            currency: "usd"
        });

        console.log(charge);
        res.status(200).send("Payment successful");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
})