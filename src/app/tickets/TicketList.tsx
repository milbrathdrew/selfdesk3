// src/app/tickets/TicketList.tsx

'use client'; // Enable client-side interactivity

import { useState, useEffect } from 'react';

// Define the structure of a ticket
interface Ticket {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

// Define props for the TicketList component
interface TicketListProps {
  newTicket: Ticket | null; // Optional prop to receive a newly created ticket
}

export default function TicketList({ newTicket }: TicketListProps) {
  // State to store the list of tickets
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // Function to fetch tickets from the API
  const fetchTickets = async () => {
    try {
      const response = await fetch('/api/tickets');
      if (response.ok) {
        const data: Ticket[] = await response.json();
        setTickets(data);
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
      // TODO: Add user-friendly error handling
    }
  };

  // Effect to fetch tickets when the component mounts
  useEffect(() => {
    fetchTickets();
  }, []);

  // Effect to add a new ticket to the list when one is created
  useEffect(() => {
    if (newTicket) {
      setTickets(prevTickets => [...prevTickets, newTicket]);
    }
  }, [newTicket]);

  return (
    <ul>
      {tickets.map((ticket) => (
        <li key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>Status: {ticket.status}</p>
          <p>Created: {new Date(ticket.createdAt).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
}
