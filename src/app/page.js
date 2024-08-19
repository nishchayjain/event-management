"use client"; // Makes the component a Client Component

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:3001/events");
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <Navbar />

      <section className="mt-10">
        <h2 className="text-3xl font-bold text-center mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{event.name}</h3>
                <p className="mt-2">{event.description}</p>
                <p className="mt-2 text-gray-600">Date: {event.date}</p>
                <Link href={`/events/${event.id}`}>
                  <span className="text-blue-600 hover:underline mt-4 block">
                    View Details
                  </span>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">No events found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
