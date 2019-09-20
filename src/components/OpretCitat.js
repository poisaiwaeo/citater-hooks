//imr
import React, { useState } from 'react'


//sfc

const OpretCitat = (props) => { //husk at modtager props her oppe eller man får ikke angange til pakken.

   const [citat, setCitat] = useState (
      {titel: "", citattxt: "", forfatter:""}
   );

   //Titel
    const handleTitel = (e) => { //...citat betyder at tage det som der er op i state. Hivs der er ikke ...citat, så overskrive den de andre.
       setCitat({...citat, titel: e.target.value }) //e = event. target = hvad target. value= det der skriver i felte.
    }

    //Citattxt
    const handleCitatet = (e) => {
      setCitat({...citat, citattxt: e.target.value })
    }
    
    //Forfatter
    const handleForfatter = (e) => {
      setCitat({...citat, forfatter: e.target.value })
    }
    const handleGemCitat = (e) => {
       e.preventDefault();
       props.OpretCitatProp(citat); //citat kommer opfra useState.
       setCitat({});
    }

    return ( 
        
        <div>

        <h2>Opret citat</h2>
        
        <form onSubmit={handleGemCitat}>
           <input type="text" placeholder="Titel her..." id="citattitel" onChange={handleTitel} value={citat.titel} />
           <br/>

           <input type="text" placeholder="Citat her..." id="citattekst" onChange={handleCitatet} value={citat.citattxt}  />
           <br/>

           <input type="text" placeholder="Forfatternavn her..." id="forfatternavn" onChange={handleForfatter} value={citat.forfatter}  />
           <br/>

           <button>Gem citatet</button>
        </form>

        </div>
     );
}
 
export default OpretCitat;
