'use strict';

const http=require('http');
const cors=require('cors');
const express=require('express');

const app=express();
const palvelin=http.createServer(app);

const port=process.env.PORT || 3000;
const host=process.env.HOST || 'localhost';

//simuloi tietokantaa
const resurssit=require('./kirjat.json');

app.use(cors());
app.use(express.json()); //kaikki tieto lähetetään jsonina

//REST API

//palauttaa listan json-olioita, jossa id ja title
app.get('/avoin/kirjat', (req, res)=>res.json(resurssit));


//req.params olio:
//haetaan
//req.params.numero = 5;

//:numero on req.params ja se(eli reitti) määritetään tässä
app.route('/avoin/kirjat/:numero')
    .get((req,res)=>kasitteleGet(req,res))
    .delete((req,res)=>kasitteleDelete(req,res));

//huom. all viimeisenä. tähän mennään vain, jos aikaisemmat ei toteudu.
app.all('*', (req,res)=>
    res.json('resurssia ei löydy tai yksilöivä tieto/numero puuttuu')
);
 
palvelin.listen(port,host,()=>
    console.log(`Palvelin ${host} portissa ${port}`)
);

function kasitteleGet(req,res) {
    if(!resurssit[req.params.numero]){
        res.json({}); //palautetaan tyhjä, jos ei löydy
    }
    else {
        res.json(resurssit[req.params.numero]);
    }
}

