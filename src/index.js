import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React,{ useState } from "react";

import App from "./App";


const rootElement = document.getElementById("root");

const num ='82345678';
const phonenumber = num.slice(0,4).padEnd(8, 'X');
const N ="\n";

const store = {
  pic: "https://images.prismic.io/99-content/dc1594fb-f413-44ff-b8b5-c3ba6cd539cd_vbWkNuxt2hjgidVttoMRDX.jpg?auto=compress,format&w=1000&q=70",
  title: "Forett At Bukit Timah",
  address: "70 Anchorvale Crescent · D21",
  project_type: "Condo",
  year: 2021,
  ownership_type: "Freehold",
  psf_min: 2609,
  psf_max: 3043,
  subprice_label: "Prices from $1.99M",
  availabilities_label: "231 units · 1, 2, 3, 4 bedrooms",
  description: 
  `
  Phone Number: ${phonenumber} ${N}
  Superb 3 bedroom in sentosa for a very affordable price and a 
  very nearby bus station.${N}
  Please call Alex B (CEA No: R0123456) @ ${num} 
  or the owner ${num} to arrange for a viewing.`,
  
}
;


ReactDOM.render(
  <StrictMode>
    <App {...store} />
  </StrictMode>,
  rootElement
);
