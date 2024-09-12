import Footer from "../Components/Footer/Footer";
import Map from "../Components/Map";
import Sidebar from "../Components/Sidebar/Sidebar";
import styles from "./AppLayout.module.css"
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div className={styles.app}>
        <Sidebar/>
        <Map />
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}
