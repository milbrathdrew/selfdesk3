import { NextResponse } from 'next/server'

// This function handles POST requests to /api/tickets
export async function POST(request: Request) {
  try {
    // Parse the JSON body of the incoming request
    const body = await request.json()
    
    // Extract the 'title' from the request body
    // You can add more fields here as needed (e.g., description, priority)
    const { title } = body

    // TODO: Validate the input
    // For example, check if title is not empty, has a minimum length, etc.
    // if (!title || title.length < 3) {
    //   return NextResponse.json({ error: 'Invalid title' }, { status: 400 })
    // }

    // TODO: Save the ticket to your database
    // This is where you would interact with your database to create a new ticket
    // For now, we're creating a mock ticket object

    // Create a new ticket object
    const newTicket = {
      id: Date.now().toString(), // Generate a unique ID (use a proper UUID in production)
      title, // The title from the request
      status: 'open', // Default status for new tickets
      createdAt: new Date().toISOString() // Current timestamp
    }

    // TODO: Replace this with actual database insertion
    // const insertedTicket = await db.tickets.insert(newTicket)

    // Return the newly created ticket with a 201 (Created) status code
    return NextResponse.json(newTicket, { status: 201 })

  } catch (error) {
    // If any error occurs during the process, log it and return a 500 error
    console.error('Failed to create ticket:', error)
    return NextResponse.json({ error: 'Failed to create ticket' }, { status: 500 })
  }
}
