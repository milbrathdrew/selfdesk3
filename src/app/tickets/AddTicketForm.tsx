// src/app/tickets/AddTicketForm.tsx

'use client'; // This directive is necessary for client-side interactivity in Next.js 13+

import { useState } from 'react';

// Define the Ticket interface
interface Ticket {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

// Define the props interface for type safety
interface AddTicketFormProps {
  onTicketAdded: (ticket: Ticket) => void; // Callback function to be called when a new ticket is added
}

export default function AddTicketForm({ onTicketAdded }: AddTicketFormProps) {
  // State to hold the ticket title input
  // useState hook allows us to add state to functional components
  const [title, setTitle] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify that we're sending JSON data
        },
        body: JSON.stringify({ title }), // Convert the title to a JSON string
      });

      if (response.ok) {
        // If the response is successful (status in the range 200-299)
        const newTicket: Ticket = await response.json(); // Parse the JSON response
        setTitle(''); // Clear the input field after successful submission
        onTicketAdded(newTicket); // Call the callback function with the new ticket data
      }
    } catch (error) {
      // Log any errors that occur during the request
      console.error('Error creating ticket:', error);
      // TODO: Add user-friendly error handling (e.g., displaying an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update state when input changes
        placeholder="Enter ticket title"
        required // Make this field required to ensure a title is entered
      />
      <button type="submit">Create Ticket</button>
    </form>
  );
}
