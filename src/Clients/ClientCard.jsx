import { GoPencil } from "react-icons/go";
const ClientCard = ({client})=>{
    return(
        <div className='col mb-1'>
            <div className='ClientCard col'>
                <div className='ClientCard-header d-flex justify-content-between p-2'>
                    <h5>{client.alias}</h5>
                    <GoPencil className= "icon" size={"1.5rem"}/>
                </div>
                <div className='ClientCard-body p-2'>
                    <p >{client.name}</p>
                    <p>{client.email}</p>
                </div>
                <div className='ClientCard-footer p-2 d-grid gap-2 col-6 mx-auto'>
                    <button className={"btn btn-lg " + (client.active?"btn-red":"btn-green")}>{client.active?"Desactivar":"Activar"}</button>
                </div>
                
            </div>
        </div>
        
    )
}

export {ClientCard};