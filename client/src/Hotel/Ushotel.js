import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//hotel lidt
const Ushotels = () => {
    const [hotels, sethotels] = useState([]);
    useEffect(() => {
        gethotels();
    }, []);
    const gethotels = async () => {
        let result = await fetch("/hotels");
        result = await result.json();
        sethotels(result);
    }
    console.log(hotels);
    //serch hotel
    const shotel = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`/serch/${key}`);
            result = await result.json();
            if (result) {
                sethotels(result);

            } console.log(result);
        } else {
            gethotels();
        }
    }






return (<>
    <input type="text" placeholder="serch" onChange={shotel} />
    <button >serch</button>

    {hotels.map((item, index) =>
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

            

           
        </ul>
    )

    }
</>);
}
export default Ushotels;