import React, { useContext } from 'react'
import "./Cella.css"
import { KattContext } from '../context/KattContext'


function Cella(props){

    const {katt} = useContext(KattContext)

    function kattintas() {
        katt(props.index)
        console.log(props.index);
        
    }


    return(
        <div className={`lampa ${props.jel ? "felkapcsolva":"lekapcsolva"}`} onClick={()=>kattintas()}></div>
    )
}

export default Cella