
import React, {useState } from 'react';

const ClientsContainer = () =>{
    const [accepted, setAccepted] = useState(true);
    const [filterText, setFilterText] = useState("");
   
    const toggleAcceptance=()=> {
        setAccepted(!accepted);
    }
    return(
        <div className='ClientsContainer'> 
            <h1 className='text-center'>Clientes</h1>
            <ClientsFilter isAccepted={accepted} onChangeSwitch={toggleAcceptance} onBtnSubmit={setFilterText}/>
            <ClientBoard />
        </div>
    );
}

const ClientsFilter = ({isAccepted, onChangeSwitch, onBtnSubmit}) =>{
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
                    <input type="checkbox" id="switch-1" className="switch-input"  checked={isAccepted} onChange={()=>{
                        onChangeSwitch();
                        setSearch("");
                        onBtnSubmit("");         
                    } }/> 
                    <label htmlFor="switch-1" className="switch-label"></label>
                    
                </div>
                <h3 className='d-inline-block col-10'>{isAccepted ? "Aceptados" : "No Aceptados"}</h3>
            </div>
            
            <div className='row client-filter-row'>
            
            </div>
           
        </div>
    );
}

const ClientBoard = () =>{
    return(
        <div className='container overflow-hidden'>
            <div className='row row-cols-2 row-cols-lg-4 g-1 g-lg-2'>
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />


            </div>

        </div>
    );
}

const ClientCard = ()=>{
    return(
        <div className='col mb-1'>
            <div className='ClientCard col'>
                <div className='ClientCard-header p-2'>
                    <h3>BlastyFN</h3>
                </div>
                <div className='ClientCard-body p-2'>
                    <p >Alejandro Francisco Bañuelos Romero</p>
                    <p>eduardofina7@gmail.com</p>
                </div>
                <div className='ClientCard-footer p-2 d-grid gap-2 col-6 mx-auto'>
                    <button className='btn btn-lg btn-green'>Aceptar</button>
                </div>
                
            </div>
        </div>
        
    )
}
export default ClientsContainer;