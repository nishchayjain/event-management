import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-600 p-4 text-white">
      <h1 className="text-xl font-bold">Event Manager</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/auth/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
