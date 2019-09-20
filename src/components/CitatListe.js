//imr
import React from 'react'



//sfc
const CitatListe = (props) => {


    let citatListe = props.allCitaterProp.map(c => {

        return (
            <div>
                <h2> {c.titel} </h2>
                <p> {c.citattxt} </p>
                <p> <i> {c.forfatter} </i> </p>
                <button onClick={ () => {props.sletCitateProp(c.id)} } >Slet</button>
            </div>
        )
    }
    );


    return ( 

        <div>

        <h1>CitatListe</h1>
        {citatListe}

        </div>

     );
}


 
export default CitatListe;