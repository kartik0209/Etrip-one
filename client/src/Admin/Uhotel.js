import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const Uhotel = () => {
    const [Hname, setname] = useState("");
    const [City, setcity] = useState("");
    const [Hadress, setadress] = useState("");
    const [Hrat, sethrat] = useState("");
    const [Sroomprice, setsroomprice] = useState("");
    const [Sroomurl, setsroomurl] = useState("");
    const [DRoomprice, setdroomprice] = useState("");
    const [DRoomurl, setdroomurl] = useState("");
    const [Suroomprice, setsuroomprice] = useState("");
    const [SuRoomurl, setsuroomurl] = useState("");
    const params=useParams();

    useEffect(()=>{
        gethoteldetails();
    },[])
    const gethoteldetails=async()=>{
     console.log("kkkk"+params);
        // let result=await fetch(`/uhotel/${params._id}`);
        // result=await result.json();

        // console.log(result)
    }

         const updatehotel= async(id)=>{
              console.log(id);
        //         let result=await fetch(`/uphotel/${id}`,{
        //             method:"put",
        //             headers:{
        //                 "content-type":"application/json"
        //             },
        //             body:JSON.stringify({Hname,City,Hadress,Hrat,Sroomprice,Sroomurl,DRoomprice,DRoomurl,Suroomprice,SuRoomurl})
                    
        //         });
        //         const data=await result.json();
        //         console.log(data);
         }
    
      
    return (<>
        <input type="text" id="Hname" name="Hname" placeholder="hotel name" value={Hname} onChange={(e)=>{setname(e.target.value)}} />
        <input type="text" id="city" name="City" placeholder="hotel name" value={City} onChange={(e)=>{setcity(e.target.value)}}/>
        <input type="text" id="Hadress" name="Hadress" placeholder="hotel name" value={Hadress} onChange={(e)=>{setadress(e.target.value)}}/>
        <input type="text" id="Hrat" name="Hrat" placeholder="hotel name" value={Hrat} onChange={(e)=>{sethrat(e.target.value)}}/>
        <input type="text" id="Sroomprice" name="Sroomprice" placeholder="hotel name" value={Sroomprice} onChange={(e)=>{setsroomprice(e.target.value)}} />
        <input type="text" id="Sroomurl" name="Sroomurl" placeholder="hotel name" value={Sroomurl} onChange={(e)=>{setsroomurl(e.target.value)}}/>
        <input type="text" id="Droomprice" name="Droomprice" placeholder="hotel name" value={DRoomprice} onChange={(e)=>{setdroomprice(e.target.value)}}/>
        <input type="text" id="Droomurl" name="Droomurl" placeholder="hotel name" value={DRoomurl} onChange={(e)=>{setdroomurl(e.target.value)}}/>
        <input type="text" id="Suroomprice" name="Suroomprice" placeholder="hotel name" value={Suroomprice} onChange={(e)=>{setsuroomprice(e.target.value)}}/>
        <input type="text" id="Suroomurl" name="Suroomurl" placeholder="hotel name" value={SuRoomurl} onChange={(e)=>{setsuroomurl(e.target.value)}}/>
        <button onClick={updatehotel} >update  hotel</button>


    </>);
    }
export default Uhotel;