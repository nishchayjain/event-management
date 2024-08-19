import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-4">{children}</main>
    </>
  );
};

export default Layout;
