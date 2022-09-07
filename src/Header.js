import {useEffect, useState} from "react";
import Converter from "./Converter";
import "./css/Header.css"

function Header() {


  let [usd, setUsd] = useState();
    let [eur, setEur] = useState();
  
   useEffect (() => {
      fetch('https://api.fastforex.io/fetch-one?from=USD&to=uah&api_key=0394b65ed2-cb64512076-rhsfnj').then(res => {
        return res.json();
       }).then(json => {
        setUsd(usd = json.result.UAH);
       })
  
       fetch('https://api.fastforex.io/fetch-one?from=eur&to=uah&api_key=0394b65ed2-cb64512076-rhsfnj').then(res => {
        return res.json();
       }).then(json => {
        setEur(eur = json.result.UAH);
       })
    }, [])
  

    if (!usd || !eur) {
        return <div className='loading-info'>Loading...</div>;
      } else {

        return (
            <div className="header">
                <h1 className="header__title">Currency Converter</h1>
                <div className="header__rates-box">
                  <div className="header__rates-box_1">USD: {usd.toFixed(2)}</div>
                  <div className="header__rates-box_2">EUR: {eur.toFixed(2)}</div>
                </div>
                <Converter eur = {eur} usd = {usd}/>
            </div>          
          );
      }

  }
  
  export default Header;