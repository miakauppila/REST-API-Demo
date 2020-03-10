'use strict';

//huom. rakenne funktiolle, joka ajetaan automaattisesti
(function(){
    let kriteeri;
    let hakuehto;
    let tulosalue;
    let uri;

    document.addEventListener('DOMContentLoaded', alusta);
    //DOMin lukeminen on hidas operaatio (vain alussa)

    function alusta() {
        document.getElementById('kaikki').addEventListener('click', valitse);
        document.getElementById('tunniste').addEventListener('click', valitse);
        hakuehto=document.getElementById('hakuehto');

        document.getElementById('btHae').addEventListener('click', haeTiedot);

        tulosalue=document.getElementById('tulosalue');
    }

    function valitse(event){
        tulosalue.textContent='';
        kriteeri= event.target.id;
    }
    //Huom. käytetään fetchiä
    async function haeTiedot(){
        let optiot={
            method: 'get',
            headers:{
                'Content-Type':'application/json'
            },
            mode: 'cors'     
        }

        if(kriteeri==='kaikki'){
            uri='http://localhost:3000/avoin/kirjat';
        }
        else{
            uri=`http://localhost:3000/avoin/kirjat/${hakuehto.value}`;
        }

        try{ //fetch&cors tarvitsee optiot
            const vastaus=await fetch(uri, optiot);
            console.log(uri);
            const data=await vastaus.json();
            tulosalue.textContent=JSON.stringify(data);
        }
        catch(virhe){
            console.log('Virhe'+virhe.message);
        }
    };

})();