const { number, string } = require("joi");
const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
    Hname: {
        type: String,
        //required: true
    },
    City: {
        type: String,
        //required: true
    },
    Hadress: {
        type: String,
        //required: true
    },
    Hrat: {
        type: Number,
        //required: true
    },
    SRoomprice: {
        type: Number,
      //  required: true
    },
    SRoomurl: {
        type: String,
    //    require: true
    },
    DRoomprice: {
        type: Number,
  //      required: true
    },
    DRoomurl: {
        type: String,
       // require: true
    },



    SuRoomprice: {
        type: Number,
//        required: true
    },
    SuRoomurl: {
        type: String,
//        require: true
    }

    
     

            
        

});

module.exports = mongoose.model("Hotel", HotelSchema);