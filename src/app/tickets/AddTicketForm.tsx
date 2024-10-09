'use client';

import { useState } from 'react';

interface Ticket {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

interface AddTicketFormProps {
  onTicketAdded: (ticket: Ticket) => void;
}

export default function AddTicketForm({ onTicketAdded }: AddTicketFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        const newTicket: Ticket = await response.json();
        setTitle('');
        onTicketAdded(newTicket);
      }
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  const buttonClass = "bg-light-purple hover:bg-purple-hover text-white font-bold py-2 px-4 rounded transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter ticket title"
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-light-purple focus:border-transparent"
        required
      />
      <button type="submit" className={buttonClass}>Create Ticket</button>
    </form>
  );
}
