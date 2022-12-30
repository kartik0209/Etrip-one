import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./Rooms.css"
const Rooms = () => {
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
    console.log(nroom, nadult, nchild);

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
           
    const Thumbnail = ({ arr, image, index }) => {
        return (<div className="tumbnail">
          {
            arr.map((imgsrc, i) => (
              <img
                key={i}
                height="50"
                src={imgsrc}
                onClick={() => image(i)}
                className={index === i ? 'active' : ''}
              />
            ))
          }
        </div>)
      }
      
      const Slideshow = ({ imgs }) => {
        const [index, setIndex] = useState(0)
      
        useEffect(() => {
          setIndex(0)
        }, [])
      
        const next = () => {
          if (index === imgs.length - 1) {
            setIndex(0)
          } else {
            setIndex(index + 1)
          }
        }
        const prev = () => {
          if (index === 0) {
            setIndex(imgs.length - 1)
          } else {
            setIndex(index - 1)
          }
        }
      
      
        return (
          <div className="slideshow">
          <div className="imagecontainer">
            <img className="mainImg" src={imgs[index]}   />
            </div>
            <div className="actions">
              <button onClick={prev}>👈</button>
              <button onClick={next}>👉</button>
            </div>
            <div className="imagecontainer02">
            <Thumbnail arr={imgs} image={setIndex} index={index} />
            </div>
          </div>
        )
      }



    return (<>
   
        {loading ? (<h1>loading</h1>) : error ? (<h2>eroor</h2>) : (<>
           
           <Slideshow imgs={[
            rooms.Hurl1 ,
            rooms.Hurl2,
            rooms.Hurl3,
            rooms.Hurl4,
            rooms.Hurl5,

        ]}/>
          
            
            {rooms.Hname}

            <h2>{rooms.City}</h2>
            <h2>{rooms.Hadress}</h2>
            <h2>{rooms.Hrat}</h2>
            <h2>{rooms.SRoomprice}</h2>
            <h2><img src={rooms.SRoomurl} alt="" height="200px" /></h2>
            <Link to={`/Sconf/${rooms._id}/${nroom}/${nadult}/${nchild}/${fdate}/${tdate}`}>
                <button>book now</button>
            </Link>
            <h2>{rooms.DRoomprice}</h2>
            <h2><img src={rooms.DRoomurl} alt="" height="200px" /></h2>
            <Link to={`/Dconf/${rooms._id}/${nroom}/${nadult}/${nchild}/${fdate}/${tdate}`}>
                <button>book now</button>
            </Link>
            <h2>{rooms.SuRoomprice}</h2>
            <h2><img src={rooms.SuRoomurl} alt="" height="200px" /></h2>
            <Link to={`/Suconf/${rooms._id}/${nroom}/${nadult}/${nchild}/${fdate}/${tdate}`}>
                <button>book now</button>
            </Link>
            <h2>servide</h2>
            



        </>)

        }

    </>)
}
export default Rooms;