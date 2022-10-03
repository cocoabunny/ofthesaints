import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <h1>This is the secrets route!</h1>
      <br />
      <main>{children}</main>
    </>
  );
}
