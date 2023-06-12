
import React, {useState } from 'react';

const ClientsContainer = () =>{
    const [active, setActive] = useState(false);
    const [filterText, setFilterText] = useState("");
   
    const toggleActivity=()=> {
        setActive(!active);
    }
    return(
        <div className='ClientsContainer'> 
            <h1 className='text-center'>Clientes</h1>
            <ClientsFilter isActive={active} onChangeSwitch={toggleActivity} onBtnSubmit={setFilterText}/>
            <ClientBoard isActive={active} />
        </div>
    );
}

const ClientsFilter = ({isActive, onChangeSwitch, onBtnSubmit}) =>{
    //Estado local para poder limpiarlo cuando cambia el switch
    const [search, setSearch] = useState('');
    return(
        <div className="ClientsFilter container  mt-6">
            
            <div className='row client-filter-row'>
                <input type="text" className='client-filter-text-input col-8' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button className='btn btn-black col-2 offset-2' onClick={()=>onBtnSubmit(search)}>Buscar</button> 
            </div>
            <div className='row client-filter-row'>
                <div className="switch col-2  d-inline-block">
                    <input type="checkbox" id="switch-1" className="switch-input"  checked={isActive} onChange={()=>{
                        onChangeSwitch();
                        setSearch("");
                        onBtnSubmit("");         
                    } }/> 
                    <label htmlFor="switch-1" className="switch-label"></label>
                    
                </div>
                <h3 className='d-inline-block col-10'>{isActive ? "Activos" : "Inactivos"}</h3>
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
                <div className='ClientCard-header p-2'>
                    <h5>Alex Programador</h5>
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