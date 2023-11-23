import React from "react";
import styles from "./BIBLIOGRAFIA.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";

const Benefits = () => {
  return (
    <div name="BIBLIOGRAFIA" className={styles.benefits}>
      <p>BIBLIOGRAFIA</p>
      <ul>
        <p>
        <li>(GAMLP) Gobierno Autónomo Municipal de La Paz – “Informe Anual 2022: Red de Monitoreo de la Calidad del Aire del Municipio de La Paz – RED MONICA LP”; (Febrero 2023)</li>
        <li>(GAMLP) Gobierno Autónomo Municipal de La Paz – “Índice del informe de supervisión K2/GP16/J21-G1; (Diciembre 2021)</li>
        </p>
      </ul>
    </div>
  );
};

export default Benefits;