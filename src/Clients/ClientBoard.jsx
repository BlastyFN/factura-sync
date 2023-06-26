import { ClientCard } from './ClientCard';

const ClientBoard = ({clients}) =>{
    
    return(
        <div className='container overflow-hidden'>
            <div className='row row-cols-2 ads row-cols-lg-4 g-1 g-lg-2'>
                {clients.map(client=>
                    
                    <ClientCard key={client.id} client={client} />
                )}
            </div>

        </div>
    );
}

export {ClientBoard};