import { createContext, useState } from "react";

export const KattContext = createContext("")

export const KattProvider = ({children}) => {
    
    const [lista, setLista]=useState([true,false,true,false,true,false,true,false,false])
    
    function katt(adat){
        const slista=[...lista]
        if(slista[adat] === true){
            slista[adat]=false
        } else {
            slista[adat]=true
        }
        setLista([...slista])
        console.log(lista)
    }

    return <KattContext.Provider value={{lista,katt}}>
       {""}{children}{""} 
    </KattContext.Provider>    
}

