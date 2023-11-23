import React from "react";
import styles from "./OBJETIVOS.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: " Determinar los niveles de concentración de los diferentes contaminantes así como sus variaciones temporales y espaciales en el municipio de La Paz. ",
      id: 1,
    },
    {
      text: " Determinación de los niveles de contaminación atmosférica a los que se halla expuesta la población.",
      id: 2,
    },
    {
      text: " 	Evaluar la efectividad de las medidas actuales y futuras contra la generación y el control de la contaminación atmosférica.",
      id: 3,
    },
    {
      text: " 	Precautelar la salud de la población boliviana, a través de la difusión y uso de la información recolectada. ",
      id: 4,
    },
  ];

  return (
    <div name="OBJETIVOS" className={styles.howWeWork}>
      <h2 className={styles.title}>OBJETIVOS</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} />
      ))}
    </div>
  );
};

export default HowWeWork;