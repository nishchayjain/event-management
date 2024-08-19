import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/events");
  const events = await res.json();

  return {
    props: { events },
  };
};

const Events = ({ events }) => {
  return (
    <div>
      <h1 className="text-center text-2xl">Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>
              <a>{event.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
