import { Outlet } from "react-router-dom";
import NavBar from "../common/navBar/NavBar";
import Footer from "./footer/Footer";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
