
import React, {useState } from 'react';

import {ClientBoard} from './ClientBoard';
import { ClientsFilter } from './ClientsFilter';
import useFirestore from '../Hooks/useFirestore';
const ClientsContainer = () =>{
    const {data, loading, error, query, updateQuery, page, nextPage, previousPage  } = useFirestore('nombre-de-la-coleccion', {active: false, text: ""});

    return(
        <div className='ClientsContainer'> 
            <h1 className='text-center'>Clientes</h1>
            <ClientsFilter filter={query} onFilterUpdate={updateQuery} page ={page} onNextPage={nextPage} onPreviousPage = {previousPage}/>
            {loading && <h3 className='text-center'>Cargando...</h3>}
            {error && <h3 className='text-center'>Error</h3>}
            {!loading&& <ClientBoard clients={data} />}
        </div>
    );
}






export default ClientsContainer;