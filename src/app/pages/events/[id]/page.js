"use client"; // Makes the component a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function EventDetailsPage() {
  const [event, setEvent] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        const response = await fetch(`http://localhost:3001/events/${id}`); // Fetch event details based on the event ID
        const data = await response.json();
        setEvent(data);
      };
      fetchEvent();
    }
  }, [id]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4">{event.name}</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg">{event.description}</p>
        <p className="mt-4 text-gray-600">Date: {event.date}</p>
        <p className="mt-4 text-gray-600">Location: {event.location}</p>
        <Link href="/events">
          <span className="text-blue-600 hover:underline mt-4 block">
            Back to Events
          </span>
        </Link>
      </div>
    </main>
  );
}
