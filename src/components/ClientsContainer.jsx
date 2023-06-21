
import React, {useState } from 'react';
import {GoPencil} from 'react-icons/go'
const ClientsContainer = () =>{
    const [filter, setFilter] = useState({
        active: false,
        text: ""
    });
   

    return(
        <div className='ClientsContainer'> 
            <h1 className='text-center'>Clientes</h1>
            <ClientsFilter filter={filter} onFilterUpdate={setFilter}/>
            <ClientBoard isActive={filter.active} />
        </div>
    );
}

const ClientsFilter = ({filter, onFilterUpdate}) =>{
    //Estado local para poder limpiarlo cuando cambia el switch
    const [search, setSearch] = useState('');
    return(
        <div className="ClientsFilter container  mt-6">
            
            <div className='row client-filter-row'>
                <input type="text" className='client-filter-text-input col-8' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button className='btn btn-black col-2 offset-2' onClick={()=>onFilterUpdate({...filter, text: search})}>Buscar</button> 
            </div>
            <div className='row client-filter-row'>
                <div className="switch col-2  d-inline-block">
                    <input type="checkbox" id="switch-1" className="switch-input"  checked={filter.active} onChange={()=>{
                        onFilterUpdate({
                            active: !filter.active,
                            text: ""
                        });
                        setSearch("");
                    } }/> 
                    <label htmlFor="switch-1" className="switch-label"></label>
                    
                </div>
                <h3 className='d-inline-block col-10'>{filter.active ? "Activos" : "Inactivos"}</h3>
            </div>
            
            <div className='row client-filter-row'>
            
            </div>
           
        </div>
    );
}

const ClientBoard = ({isActive}) =>{
    
    return(
        <div className='container overflow-hidden'>
            <div className='row row-cols-2 row-cols-lg-4 g-1 g-lg-2'>
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />
                <ClientCard isActive={isActive} />


            </div>

        </div>
    );
}

const ClientCard = ({isActive, client})=>{
    return(
        <div className='col mb-1'>
            <div className='ClientCard col'>
                <div className='ClientCard-header d-flex justify-content-between p-2'>
                    <h5>Lalo</h5>
                    <GoPencil className= "icon" size={"1.5rem"}/>
                </div>
                <div className='ClientCard-body p-2'>
                    <p >Alejandro Francisco Bañuelos Romero</p>
                    <p>eduardofina7@gmail.com</p>
                </div>
                <div className='ClientCard-footer p-2 d-grid gap-2 col-6 mx-auto'>
                    <button className={"btn btn-lg " + (isActive?"btn-red":"btn-green")}>{isActive?"Desactivar":"Activar"}</button>
                </div>
                
            </div>
        </div>
        
    )
}
export default ClientsContainer;