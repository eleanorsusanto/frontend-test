import "./styles.css";
import React,{ useState } from "react";

export default function ListingAd({ pic, title, address,project_type, year, ownership_type, 
  availabilities_label, psf_min, psf_max, subprice_label, description,phonenum,number}) {

  const [open,setOpen]=useState(false);
  const [reveal, setReveal] = useState(false);
  
  return (
    <div className="App">
      <img className="mainPic" width="500" height="500" src={pic} />
      <img className="hovers" src="./hover.svg" />
      <div className="mainContent">
        <div className="Section">
          <div className="leftSection">
            <div className="frame">
              <img className="icon" src="./building-icon.svg"/>
              <div className="frameText">
                <h1>{title}</h1>
                <p className="address">{address}</p>
              </div>
            </div>
            <div className="descText">
              <p className="Fill">{project_type} · {year} · {ownership_type}</p>
              <p className="Fill2">{availabilities_label}</p>
            </div>         
          </div>
          <div className="rightSection">
            <p className="psf">${psf_min} - ${psf_max} psf</p>
            <p className="prices">{subprice_label}</p>
          </div>
        </div> 
        
        <button className="btn" onClick={()=>setOpen(!open)}>See description</button>
        <div className="desc">
          {
            open?
            <p className="description">{description}
            <button className="testShow" onClick={()=>setReveal(!reveal)}>Show Phone Number</button>
            {reveal?<div>{phonenum}</div>:<div>{number}</div>}
            </p>
            :null
          }

        </div>
      </div>
    </div>
  );
}
