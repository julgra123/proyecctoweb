import React from "react";
import { Link } from "react-scroll";
import styles from "./INTRODUCCION.module.css";

const Home = () => {
  return (
    <div name="INTRODUCCION" className={styles.home}>
      <div className={styles.titleContainer}>
      <img
        className={styles.webImage}
        src={require("../assets/R.jpg")}
      ></img>
        <p>
        INTRODUCCION<br/>
A travez de los años la evolución tecnológica la creación de plantas nucleares y de industrias generan desperdicios ambientales que dañan nuestro planeta.
Con el fin de saber cada cierto tiempo que daños generan a nuestro medio ambiente y a nuestra atmosfera se lanzaron diferentes proyectos que abarcan el cuidado del agua, monitoreo de la calidad atmosférica, preservación de áreas verdes, cuidado a los arboles, reciclaje, etc.
La contaminación atmosférica es uno de los principales problemas ambientales en los centros urbanos, la Calidad del Aire se ve afectada principalmente por las emisiones que provienen del parque automotor, la industria y el uso doméstico (cocina, calefacción). Según la Organización Mundial de la Salud (OMS), alrededor de un millón de personas se exponen diariamente a niveles de contaminación por encima de los límites recomendados.
En este proyecto nos enfocaremos en el monitoreo de la calidad atmosférica en el municipio de La Paz- Bolivia.
 <br />
          
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          ONG
        </Link>
      </div>
    </div>
  );
};

export default Home;