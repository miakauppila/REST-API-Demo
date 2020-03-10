'use strict'

const kirjat=require('./kirjat.json');

//hakufunktio on nimetön nuolifunktio, joka exportataan
module.exports= (tunniste)=>{  
    //tunniste on kirjan id
    //Huom. jos tunniste puuttuu niin palautetaan kaikki kirjat perustiedot-listana
    let loydetyt=[];
    if(tunniste){
        for(let kirja of kirjat){
            if(kirja.perustiedot.id==tunniste){
                loydetyt.push(kirja);
            }
        }
    }
    else {
        for(let kirja of kirjat){
                loydetyt.push(kirja.perustiedot);
        }
    }
    return loydetyt;
};