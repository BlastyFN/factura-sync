import { ClientCard } from './ClientCard';
import { Modal } from "../Global/Modal";
import { ClientsModal } from "./ClientsModal";
import { useState } from 'react';
const ClientBoard = ({clients}) =>{
        const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <div className='container overflow-hidden'>
            <div className='row row-cols-2 ads row-cols-lg-4 g-1 g-lg-2'>
                {clients.map(client=>
                    
                    <ClientCard key={client.id} client={client} setIsModalOpen={setIsModalOpen} />
                )}
            </div>
            {isModalOpen && (<Modal><ClientsModal></ClientsModal></Modal>)}
        </div>
    );
}

export {ClientBoard};