'use strict';

//huom. rakenne funktiolle, joka ajetaan automaattisesti
(function(){
    let kriteeri='kaikki';
    let tulosalue;

    document.addEventListener('DOMContentLoaded', alusta);
    //DOMin lukeminen on hidas operaatio (vain alussa)

    function alusta() {
        tulosalue=document.getElementById('tulosalue');
        document.getElementById('kaikki').addEventListener('click', valitse);
        document.getElementById('tunniste').addEventListener('click', valitse);

        document.getElementById('btHae').addEventListener('click', laheta);

    }

    function valitse(event){
        tulosalue.textContent='';
        kriteeri= event.target.id;
    }
    //Huom. käytetään fetchiä
    async function laheta(){
        let optiot={
            method: 'GET',
            mode: 'cors',
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{ //kun fetch corsilla niin optiot pakollinen
            const vastaus=await fetch('localhost:3000/avoin/', optiot);
            const data=await vastaus.json();
            tulosalue.textContent=JSON.stringify(data);
        }
        catch(virhe){
            console.log('Virhe'+virhe.message);
        }
    };

})();