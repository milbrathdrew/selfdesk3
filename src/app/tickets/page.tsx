'use client';
import { useState } from 'react';
import TicketList from './TicketList';
import AddTicketForm from './AddTicketForm';

// Define the Ticket interface
interface Ticket {
    id: string;
    title: string;
    status: string;
    createdAt: string;
}

export default function TicketsPage() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [newTicket, setNewTicket] = useState<Ticket | null>(null);

    const handleTicketAdded = (ticket: Ticket) => {
        setNewTicket(ticket);
        setShowAddForm(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Queue</h1>

            <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-light-purple hover:bg-purple-hover text-white font-bold py-2 px-4 rounded mb-4 transition-colors"
            >
                {showAddForm ? 'Cancel' : 'Add New Ticket'}
            </button>


            {showAddForm && <AddTicketForm onTicketAdded={handleTicketAdded} />}

            <TicketList newTicket={newTicket} />
        </div>
    );
}
