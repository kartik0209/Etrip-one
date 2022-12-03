import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
//hotel lidt
const Hotels=()=>{
    const [hotels,sethotels]=useState([]);
    useEffect(()=>{
        gethotels();
    },[]);
    const gethotels= async()=>{
        let result= await fetch("/hotels");
        result=await result.json();
        sethotels(result);
    }
    console.log(hotels);
//serch hotel
    const shotel= async(event)=>{

        let key=event.target.value;
        if(key){
        let result=await fetch(`/serch/${key}`);
        result=await result.json();
        if(result){
            sethotels(result);
    
        }console.log(result);
    }else{
        gethotels();
    }
    }
//delete hotel
const deletehotel=async(id)=>{
console.log(id);
let result=await fetch(`/dhotel/${id}`,{
    method:"Delete"
});
result=await result.json();
if(result){
    gethotels();
}
}



return(<>
<input type="text" placeholder="serch" onChange={shotel} />
    <button >serch</button>

{hotels.map((item,index)=>
    <ul key={item._id}>
        <li>{item.Hname}</li>
        <li>{item.City}</li>
        <li>{item.Hadress}</li>
        <li>{item.Hrat}</li>
        <li>{item.SRoomprice}</li>
        <li><img src={item.SRoomurl}/></li>
    
        <li>{item.DRoomprice}</li>
        <li><img src={item.DRoomurl}/></li>
        <li>{item.SuRoomprice}</li>
        <li><img src={item.SuRoomurl}/></li>
        
        <li><button on onClick={()=>deletehotel(item._id)}>delete</button>
        <Link to={"/uhotel/"+item._id}>update</Link>
        </li>
    </ul>
)
    
}
</>);
}
export default Hotels