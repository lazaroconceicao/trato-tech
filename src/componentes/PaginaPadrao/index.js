import Footer from "componentes/Footer";
import Navbar from "componentes/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./PaginaPadrao.module.scss";

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["container-outlet"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
