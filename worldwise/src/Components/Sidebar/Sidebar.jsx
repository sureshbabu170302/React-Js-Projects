import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import AppNav from "../Navbar/AppNav"
import Logo from "../Navbar/Logo"
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet/>
      <Footer/>
    </div>
  )
}
