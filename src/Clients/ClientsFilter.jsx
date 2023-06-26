import { useState } from 'react';
import {GoArrowLeft, GoArrowRight} from 'react-icons/go';

const ClientsFilter = ({filter, onFilterUpdate}) =>{
    //Estado local para poder limpiarlo cuando cambia el switch
    const [search, setSearch] = useState('');
    return(
        <div className="ClientsFilter container  mt-6">
            
            <div className='row client-filter-row'>
                <input type="text" className='client-filter-text-input col-8' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button className='btn btn-black col-2 offset-2' onClick={()=>onFilterUpdate({...filter, text: search})}>BUSCAR</button> 
            </div>
            <div className='row client-filter-row'>
                <div className="client-switch col-2  d-inline-block">
                    <input type="checkbox" id="client-switch-1" className="client-switch-input"  checked={filter.active} onChange={()=>{
                        onFilterUpdate({
                            active: !filter.active,
                            text: ""
                        });
                        setSearch("");
                    } }/> 
                    <label htmlFor="client-switch-1" className="client-switch-label"></label>
                    
                </div>
                <h3 className='d-inline-block col-3'>{filter.active ? "Activos" : "Inactivos"}</h3>
                <button className='d-inline-block col-1 btn btn-black pag-btn' disabled><GoArrowLeft color='white' size={"1.5rem"}/></button>
                <h3 className='text-center d-inline-block col-2'>Página 1</h3>
                <button className='d-inline-block col-1 btn btn-black pag-btn'><GoArrowRight color='white' size={"1.5rem"}/></button>
            </div>
            
            <div className='row client-filter-row'>
            
            </div>
           
        </div>
    );
}

export {ClientsFilter}; 