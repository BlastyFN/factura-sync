import React from "react";
import { GoX } from "react-icons/go";
const ClientsModal = ({onCloseModal})=>{
    return (
        <div className="ClientsModal">
            <div className="ClientsModal_header">
                <h1>Hola</h1>
                <span onClick={()=>onCloseModal(false)}> <GoX className="icon"size={"3em"}/> </span>
                
            </div>
            
        </div>
    )
}

export {ClientsModal};