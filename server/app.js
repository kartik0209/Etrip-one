const dotenv = require("dotenv");
 const cors=require("cors");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
dotenv.config({ path: "./confling.env" });
const db = process.env.database;
const user = require("./model/userschema");
const Hotel=require("./model/Hotel");

//mongodb+srv://kartik:kr020902@cluster0.dzxfhzt.mongodb.net/?retryWrites=true&w=majority


mongoose.connect(db).then(() => { console.log("connected"); }).catch((e) => { console.log("fail"); });
app.use(express.json());
app.use(cors());
app.use("/", require("./router/auth"));
//app.use("/api/password-reset", password);
const middleware = (req, res, next) => {

}

middleware();
app.get("/", (req, res) => {
    res.send("hello word")
});

app.get("/about", middleware, (req, res) => {
    res.send("hello about")
});

app.get("/contact", (req, res) => {
    res.send("hello word")
});
app.get("/signin", (req, res) => {
    res.send("hello word")
});
app.get("/Alogin", (req, res) => {
    res.send("hello word")
});

app.post("/signup", (req, res) => {
    res.send("hello word")
});

//hotel create
app.post("/addhotel",async (req,res)=>{
    let hotel=new Hotel(req.body);
    let result=await hotel.save();
    res.send(result);
});

//serch api hotel
app.get("/serch/:key",async(req,res)=>{
    let result=await Hotel.find({
        "$or":[
            {
                City:{$regex:req.params.key}
            }
        ]
    });
    res.send(result);
})

//hotel list
app.get("/hotels",async(req,res)=>{
    const hotels=await Hotel.find();
    if(hotels.length>0){
        res.send(hotels);
    }else{
        res.send({result:"no hotel"})
    }
})
//delete hotel
app.delete("/dhotel/:id",async(req,res)=>{
    let result=await Hotel.deleteOne({_id:req.params.id});
    res.send(result)
})

// update hotel
app.get("/uhotel/:id",async(req,res)=>{
    let result =await Hotel.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }else{
        res.send({"result":"not record found"})
    }
})

app.put("/uphotel/:id",async(req,res)=>{
    let result= await Hotel.updateOne( 
        {_id:req.params.id},
        {$set:req.body}
    )
    res.send(result);
})


app.listen(5000, () => {
    console.log("conection connected");
})