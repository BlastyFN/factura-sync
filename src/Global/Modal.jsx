import React from "react";
import  ReactDOM  from "react-dom";
const Modal = ({children})=>{
    return ReactDOM.createPortal(
        <div className="defModal">
            {children}
        </div>,
        document.getElementById("modal")
    )
}

export {Modal};