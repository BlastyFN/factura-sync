import React from 'react';

const ClientsContainer = () =>{
    return(
    <div className='ClientsContainer'> 
        <ClientsFilter/>
    </div>
    );
}

const ClientsFilter = () =>{
    return(
        <div className="ClientsFilter container text-center">
            <div className="switch">
                <input type="checkbox" id="switch-1" className="switch-input"/>
                <label for="switch-1" className="switch-label"></label>
            </div>
            
            <div className='row justify-content-md-center'>
                <input type="text form-control" className='col-7'/>
                <button className='btn btn-black col-2'>Buscar</button>
            </div>
            
        </div>
    );
}

export default ClientsContainer;