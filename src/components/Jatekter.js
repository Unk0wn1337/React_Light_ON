import React from "react";
import Cella from "./Cella";

function JatekTer(props){

    return(
        <div className="ter">
            {
                props.lista.map((elem,index) => {
                    return(<Cella jel={elem}/>)
                })
            }
        </div>
    )
}

export default JatekTer