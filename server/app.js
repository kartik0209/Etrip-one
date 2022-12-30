const dotenv = require("dotenv");
 const cors=require("cors");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
dotenv.config({ path: "./confling.env" });
const db = process.env.database;
const user = require("./model/userschema");
const Hotel=require("./model/Hotel");
const User = require("./model/userschema");
const HBooking = require("./model/HBooking");

//mongodb+srv://kartik:kr020902@cluster0.dzxfhzt.mongodb.net/?retryWrites=true&w=majority
//mongodb://localhost:27017/etrip
//mongodb+srv://kr:kr020902@cluster0.ivdulfu.mongodb.net/user_master?retryWrites=true&w=majority

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
// romm
app.post("/photels/:id",async(req,res)=>{
    const hotels=await Hotel.findOne({_id:req.params.id});
    res.send(hotels);
    
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

//hbooking
app.post("/hbook",async (req,res)=>{

        let hbooking=new HBooking(req.body);
        let result=await hbooking.save();
        res.send(result);
})



// user list
app.get("/users", async(req,res)=>{
    const users=await User.find();
    if(users.length>0){
        res.send(users);
    }else{
        res.send({result:"no hotel"})
    }
})
// user serch
app.get("/userch/:key",async(req,res)=>{
    let result=await User.find({
        "$or":[
            {
                name:{$regex:req.params.key}
            }
        ]
    });
    res.send(result);
})

app.get("/userchs/:key",async(req,res)=>{
    let result=await User.find({
        "$or":[
            {
                email:{$regex:req.params.key}
            }
        ]
    });
    res.send(result);
})

// delet users
app.delete("/duser/:id",async(req,res)=>{
    let result=await User.deleteOne({_id:req.params.id});
    res.send(result)
})


app.listen(5000, () => {
    console.log("conection connected");
})