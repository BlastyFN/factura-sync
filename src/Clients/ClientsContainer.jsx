
import React, {useState } from 'react';

import {ClientBoard} from './ClientBoard';
import { ClientsFilter } from './ClientsFilter';
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
            {/* <h3 className='text-center'>Cargando...</h3> */}
            { <ClientBoard clients={example} />}
        </div>
    );
}






export default ClientsContainer;