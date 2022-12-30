import ro from "date-fns/esm/locale/ro/index.js";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Suconf = () => {
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();

    const params = useParams()
    useEffect(() => {
        console.log(params.roomid)
    }, [params])

    const nroom = params.nroom;
    const nadult = params.nadult;
    const nchild = params.nchild;
    const tdate = params.tdate;
    const fdate = params.fdate;
    console.log(fdate)

    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);

        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays;
    }

    const totaldays = getNumberOfDays(fdate, tdate);

    const [rooms, setrooms] = useState();
    useEffect(async () => {
        try {
            setloading(true);
            let result = await fetch(`/photels/${params.roomid}`, {
                method: "POST"
            });
            result = await result.json();
            setrooms(result);
            console.log(result);
            setloading(false);

        } catch (eroor) {
            seterror(true);
            seterror(false);
        }
    }, []);

    const tax = 1250;
    //console.log(rooms.SRoomprice)
    const hbook = async () => {

        let result = await fetch("/hbook", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ hotel: rooms.Hname, troom: "suit", hotelid: rooms._id, userid: "11", Fromdate: fdate, todate: tdate, totalamount: rooms.SuRoomprice * totaldays + tax, totalday: totaldays, payid: 1, status: "booked" })

        });
        const data = await result.json();
        console.log("...", data);
    }
    const [cupon, scupon] = useState("");


    return (<>
        {loading ? (<h1>loading</h1>) : error ? (<h2>eroor</h2>) : (<><h1>rooms</h1>
            <h1>adult=={nadult}</h1>
            <h1>room=={nroom}</h1>
            <h1>child=={nchild}</h1>
            <h1>form date=={fdate}</h1>
            <h1>to date=={tdate}</h1>
            <h1>{rooms.Hname}</h1>

            <h2>{rooms.City}</h2>
            <h2>{rooms.Hadress}</h2>
            <h2>{rooms.Hrat}</h2>
            <h2>total days{totaldays}</h2>
            <input type="text" onChange={(e) => scupon(e.target.value)} />
            <h2>{rooms.SuRoomprice}</h2>
            tax---{tax}
            {(cupon == "E-TRIP10") ? (<>
                <h3>save money 2000</h3>
                <h2>totalamount--{(rooms.SuRoomprice * totaldays) + tax - 2000} </h2></>) 
                :
                 (<><h2>totalamount--{(rooms.SuRoomprice * totaldays) + tax} </h2></>)}

            <h2><img src={rooms.SuRoomurl} alt="" height="200px" /></h2>
            
            <button onClick={hbook}>booked</button>
        </>)

        }

    </>)
}
export default Suconf;