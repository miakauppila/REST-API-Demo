# REST API Demo  
- noden express-palvelin 
- CORS-tyyppinen sovellus: yksinkertainen hakusivu, joka hakee tietoja REST APIsta  
- REST API simuloi tietokantaa kirjoista, josta ulkopuoliset käyttäjät hakevat tietoa 
- tiedot on tallennettu JSON-muodossa, jossa ne myös palautetaan verkkosivulle ilman muotoiluja 
- käyttäjä voi:
    - hakea kaikki tiedot, jolloin palautetaan listaus kirjojen perustiedoista. Uri: http://localhost:3000/avoin/kirjat
    - tai yksittäisen kirjan kaikki tiedot sen tunnisteen perusteella. Uri: http://localhost:3000/avoin/kirjat/kirjanTunniste  
- tekijä: Mia Kauppila 02-10.3.2020
