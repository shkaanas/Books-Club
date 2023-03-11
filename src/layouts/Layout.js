import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout(props) {

  return (
    <>
      <Navigation />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}
