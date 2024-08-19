import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const CreateEvent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, date }),
    });

    router.push("/events");
  };

  if (!session) {
    return <p>You need to be authenticated to create an event.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        name="description"
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
