import React, { useState } from 'react';
import './App.css';
import OpretCitat from './components/OpretCitat';
import CitatListe from './components/CitatListe';

function App() {

//"state"
  const [citater, setCitater] = useState ([

  { titel: "Intet ved", citattxt: "Alt, hvad jeg ved, er, at jeg intet ved.", forfatter: "Sokrates", id: 1 },
  { titel: "Det klarer jeg", citattxt: "Det har jeg aldrig gjort før, så det klarer jeg helt sikkert.", forfatter: "Pippi Langstrømpe", id: 2 },
  { titel: "Løsninger", citattxt: "Find ikke fejl, find en løsning.", forfatter: "Henry Ford", id: 3 },
  { titel: "Sig selv", citattxt: "Vær dig selv, alle andre er alligevel optaget.", forfatter: "Oscar Wilde", id: 4 },
  { titel: "Syng!", citattxt: "Når du står i lort til halsen, er alt, hvad du kan gøre, at synge.", forfatter: "Samuel Beckett", id: 5 }

 ]);


//Opret Citat
  const opretCitat = (nytCitat) => {

  nytCitat.id = Math.random (); //Math.floor (Math.random() * 1000)
  setCitater([...citater, nytCitat]);

};

//slet citat
//c = citater,  det er ligegyldigt hvad navnet er. Det bestemmer man selv
const sletCitat = (id) => {
  setCitater (citater.filter(c => c.id !== id ));
};


  //det der bliver vist i browser:
  return (
    <div className="App">
      <h1>Citater-hooks</h1>

      <OpretCitat OpretCitatProp={opretCitat} /> 

      <CitatListe allCitaterProp={citater} sletCitateProp={sletCitat} />

    </div>
  );
}

export default App;
