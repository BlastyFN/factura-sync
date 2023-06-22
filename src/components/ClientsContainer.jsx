
import React, {useState } from 'react';
import {GoPencil} from 'react-icons/go';
const example = [
    {
        id:"123",
        alias: "Alex",
        name: "Alejandro Francisco Bañuelos Romero",
        email: "slimedev_02@gmail.com",
        active: false
    },
    {
        id:"6543",
        alias: "Isaac",
        name: "Isaac Díaz Trejo",
        email: "isaacdiaztrejo@gmail.com",
        active: false
    },
    {
        id:"9843",
        alias: "Andrés",
        name: "Andrés López Díaz",
        email: "allop@gmail.com",
        active: false
    },
    {
        id:"98324",
        alias: "Lalo",
        name: "Eduardo Marcelino Figueroa Navarro",
        email: "eduardofina7@gmail.com",
        active: false
    },
    {
        id:"3243",
        alias: "Ten",
        name: "Tenyotl Itzel García Tamayo",
        email: "tenyotldf@gmail.com",
        active: false
    },
    {
        id:"9451",
        alias: "Marco",
        name: "Marco Iván Vallejo Valencia",
        email: "marcovv@gmail.com",
        active: false
    },
    {
        id:"98325982",
        alias: "Rodri",
        name: "Rodrigo Félix Velasco",
        email: "felixtejuino666@gmail.com",
        active: false
    },
    {
        id:"45436543",
        alias: "Carlos",
        name: "Carlos Fernando López Ocampo",
        email: "carlosfer@gmail.com",
        active: false
    },
    {
        id:"25364363454",
        alias: "Aramis",
        name: "Carlos Aramis López Ovalle",
        email: "aramissss@gmail.com",
        active: false
    },
]
const ClientsContainer = () =>{
    const [filter, setFilter] = useState({active: false, text: ""});
    

    return(
        <div className='ClientsContainer'> 
            <h1 className='text-center'>Clientes</h1>
            <ClientsFilter filter={filter} onFilterUpdate={setFilter}/>
            {/* { <h4 className='text-center'>Cargando ...</h4> */ <ClientBoard clients={example} />}
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
                <button className='btn btn-black col-2 offset-2' onClick={()=>onFilterUpdate({...filter, text: search})}>BUSCAR</button> 
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
                <h3 className='d-inline-block col-3'>{filter.active ? "Activos" : "Inactivos"}</h3>
                <button className='d-inline-block col-1 btn btn-black pag-btn' disabled>ANTERIOR</button>
                <h3 className='text-center d-inline-block col-2'>Página 1</h3>
                <button className='d-inline-block col-1 btn btn-black pag-btn'>SIGUIENTE</button>
            </div>
            
            <div className='row client-filter-row'>
            
            </div>
           
        </div>
    );
}

const ClientBoard = ({clients}) =>{
    
    return(
        <div className='container overflow-hidden'>
            <div className='row row-cols-2 row-cols-lg-4 g-1 g-lg-2'>
                {clients.map(client=>
                    <ClientCard key={client.id} client={client} />
                )}
            </div>

        </div>
    );
}

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
export default ClientsContainer;