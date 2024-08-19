export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/events");
  const events = await res.json();

  const paths = events.map((event) => ({
    params: { eventId: event.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3001/events/${params.eventId}`);
  const event = await res.json();

  return {
    props: { event },
  };
};

const EventDetails = ({ event }) => {
  return (
    <div>
      <h1 className="text-center text-2xl">{event.name}</h1>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
    </div>
  );
};

export default EventDetails;
