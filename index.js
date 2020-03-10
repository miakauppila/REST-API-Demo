'use strict';

const http=require('http');
const cors=require('cors');
const express=require('express');

const app=express();
const palvelin=http.createServer(app);

const port=process.env.PORT || 3000;
const host=process.env.HOST || 'localhost';

//simuloi tietokantaa
const hae=require('./kirjavarasto.js');

let hakutulos;

app.use(cors());
app.use(express.json()); //kaikki tieto lähetetään jsonina

//REST API

//kun mennään juureen ilman reittiä
app.get('/', (req,res)=>res.json({virhe:'komento puuttuu'}));

//palauttaa listan kirjojen perustiedoista
app.get('/avoin/kirjat', (req, res)=>kasitteleGet(req,res));

//palauttaa yksittäisen kirjan tiedot
app.route('/avoin/kirjat/:numero')//:numero on req.params olio ja reitti määritetään tässä
    .get((req,res)=>kasitteleGet(req,res))
    .post((req,res)=>kasitteleMuut(req,res))
    .put((req,res)=>kasitteleMuut(req,res))
    .delete((req,res)=>kasitteleMuut(req,res));

//huom. all viimeisenä. tähän mennään vain, jos aikaisemmat ei toteudu.
app.all('*', (req,res)=>
    res.json('resurssia ei löydy tai yksilöivä tieto/tunniste puuttuu')
);
 
palvelin.listen(port,host,()=>
    console.log(`Palvelin ${host} portissa ${port}`)
);

function kasitteleGet(req,res) {
    if(req.params.numero){
        hakutulos = hae(req.params.numero);
        res.json(hakutulos);
    }
    else {
        hakutulos=hae();
        res.json(hakutulos);
    }
}

function kasitteleMuut(req,res){
    res.json({virhe:'vain tietohaku on avoinna'});
}
