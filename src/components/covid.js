import React, {useEffect, useState} from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);
    
    const GetCovidData = async () =>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0]);
        }
        catch(err){
            console.log(err);
        }
    }
       
    useEffect(() => {
        GetCovidData();
    }, [])
    
  return (
    <>
    <section>
         <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      <div className = "div_first">
      <ul>
        <li className="card">
        <div className= "card_main">
        <div className="card_inner">
        <p className= "card_name"><span> OUR </span> COUNTRY</p>
        <p className = "card_total ">INDIA</p>
        </div>
        </div>
        </li>
      </ul>
      <ul>
        <li className="card">
        <div className= "card_main1">
        <div className="card_inner">
        <p className= "card_name"><span> TOTAL </span> RECOVERED </p>
        <p className = "card_total ">{data.recovered}</p>
        </div>
        </div>
        </li>
      </ul>
      <ul>
        <li className="card">
        <div className= "card_main2">
        <div className="card_inner">
        <p className= "card_name"><span> TOTAL </span> CONFIRMED </p>
        <p className = "card_total ">{data.confirmed}</p>
        </div>
        </div>
        </li>
      </ul>
      </div>
      <div className = "div_second">
      <ul>
        <li className="card">
        <div className= "card_main3">
        <div className="card_inner">
        <p className= "card_name"><span> TOTAL </span> DEATH </p>
        <p className = "card_total ">{data.deaths}</p>
        </div>
        </div>
        </li>
      </ul>
      <ul>
        <li className="card">
        <div className= "card_main4">
        <div className="card_inner">
        <p className= "card_name"><span> TOTAL </span> ACTIVE</p>
        <p className = "card_total ">{data.active}</p>
        </div>
        </div>
        </li>
      </ul>
      <ul>
        <li className="card">
        <div className= "card_main5">
        <div className="card_inner">
        <p className= "card_name"><span> LAST </span> UPDATED</p>
        <p className = "card_total ">{data.lastupdatedtime}</p>
        </div>
        </div>
        </li>
      </ul>
      </div>
      </section>
    </>
  )
}


export default Covid